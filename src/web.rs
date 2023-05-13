use std::{sync::{Mutex, MutexGuard, Arc}, collections::HashMap, net::SocketAddr};
use rocket::futures::{StreamExt, channel::mpsc::unbounded, TryStreamExt, future};
use rocket::{State, http::*, serde::json::Json, Request};
use serde::{Deserialize, Serialize};
use ws::{stream::DuplexStream, Message};

use crate::{state, config, command};

pub struct WebState {
    pub st: Arc<Mutex<state::ServerState>>,
}

impl WebState {
    pub fn new(config: config::Config) -> Self {
        Self {
            st: Arc::new(Mutex::new(state::ServerState::new(config))),
        }
    }

    pub fn get_state(&self) -> Result<MutexGuard<state::ServerState>, Status> {
        self.st.lock().map_err(|_| Status::InternalServerError)
    }

    pub fn check_auth(&self, token: &str) -> Result<MutexGuard<state::ServerState>, Status> {
        let st = self.get_state()?;
        if token != st.admin_token { return Err(Status::Forbidden); }
        Ok(st)
    }
}

#[derive(Debug, Serialize)]
pub struct ErrorResponse {
    pub err: u16,
    pub msg: Option<String>,
}

#[rocket::catch(default)]
pub fn default_catcher(status: Status, _req: &Request) -> Json<ErrorResponse> {
    Json(ErrorResponse {
        err: status.code,
        msg: None,
    })
}

#[derive(Debug, Serialize)]
pub struct AdminResponseRobot {
    pub config: config::RobotConfig,
    pub room: Option<String>,
}
#[derive(Debug, Serialize)]
pub struct AdminResponse {
    pub robots: HashMap<String, AdminResponseRobot>,
}
#[rocket::get("/admin?<token>")]
pub fn get_admin(web: &State<WebState>, token: &str) -> Result<Json<AdminResponse>, Status> {
    let st = web.check_auth(token)?;
    Ok(Json(AdminResponse {
        robots: st.robots.iter()
            .map(|(id, r)| (id.clone(), AdminResponseRobot {
                config: r.config.clone(),
                room: r.room.clone(),
            }))
            .collect(),
    }))
}

#[rocket::get("/channel/<id>?<token>")]
pub fn get_channel_bot<'r>(webst: &State<WebState>, token: &'r str, id: &'r str, ws: ws::WebSocket, addr: SocketAddr) -> Result<ws::Channel<'r>, Status> {
    
    let _ = webst.check_auth(token);
    let amst = webst.inner().st.clone();
    let nm = addr.to_string();
    Ok(ws.channel(move |DuplexStream(wss)| Box::pin(async move {
        let (sender, receiver) = unbounded();
        let (outgoing, incoming) = wss.split();
        if let Ok(mut st) = amst.lock() {
            let robot = st.robots.get_mut(id).unwrap();
            println!("client connected: {}", nm);
            robot.clients.insert(nm.clone(), sender);
        } else {
            return Err(ws::result::Error::ConnectionClosed);
        }
        let outgoing_updates = receiver.map(Ok).forward(outgoing);
        let incoming_updates = incoming.try_for_each(|_msg| {
            future::ok(())
        });
        future::select(incoming_updates, outgoing_updates).await;

        if let Ok(mut st) = amst.lock() {
            let robot = st.robots.get_mut(id).unwrap();
            println!("client disconnected: {}", nm);
            robot.clients.remove(&nm);
        } else {
            return Err(ws::result::Error::ConnectionClosed);
        }
        Ok(())
    })))
}

#[derive(Debug, Deserialize)]
pub struct AdminRoomRequest {
    pub room: Option<String>,
}
#[rocket::put("/admin/<id>/room?<token>", data="<data>")]
pub fn put_admin_room(web: &State<WebState>, token: &str, id: &str, data: Json<AdminRoomRequest>) -> Result<(), Status> {
    let mut st = web.check_auth(token)?;
    let robot = st.robots.get_mut(id).ok_or(Status::NotFound)?;
    robot.room = data.room.clone();
    Ok(())
}

#[rocket::get("/bot/<id>")]
pub fn get_bot(web: &State<WebState>, id: &str) -> Result<Json<config::RobotConfig>, Status> {
    let st = web.get_state()?;
    let robot = st.robots.get(id).ok_or(Status::NotFound)?;
    Ok(Json(robot.config.clone()))
}

#[derive(Debug, Serialize)]
pub struct GetRoomResponse {
    pub id: String,
    pub robot: config::RobotConfig,
}
#[rocket::get("/room/<room>")]
pub fn get_room(web: &State<WebState>, room: &str) -> Result<Json<GetRoomResponse>, Status> {
    let st = web.get_state()?;
    let (id, robot) = st.robots
        .iter()
        .find(|(_, r)| r.room == Some(room.to_owned()))
        .ok_or(Status::NotFound)?;
    Ok(Json(GetRoomResponse {
        id: id.to_owned(),
        robot: robot.config.clone(),
    }))
}

#[derive(Debug, Deserialize)]
pub struct BotCommandRequest {
    pub room: String,
    pub command: command::Command,
}
#[rocket::post("/bot/<id>", data="<data>")]
pub fn post_bot(web: &State<WebState>, id: &str, data: Json<BotCommandRequest>) -> Result<(), Status> {
    let st = web.get_state()?;
    let robot = st.robots.get(id).ok_or(Status::NotFound)?;
    if Some(data.room.clone()) != robot.room { return Err(Status::Forbidden); }
    let msg = serde_json::to_string(&data.command).map_err(|_| Status::InternalServerError)?;
    for (_addr, writer) in &robot.clients {
        let _ = writer.unbounded_send(Message::Text(msg.clone()));
    }
    println!("{:?}", *data);
    Ok(())
}
