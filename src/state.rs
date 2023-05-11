use std::collections::HashMap;
use rocket::futures::channel::mpsc::UnboundedSender;
use serde::Serialize;
use ws::{stream::DuplexStream, Message};

use crate::config;

pub struct Robot {
    pub config: config::RobotConfig,
    pub room: Option<String>, // control room code
    pub clients: HashMap<String, UnboundedSender<Message>>,
}

impl Robot {
    pub fn new(config: config::RobotConfig) -> Self {
        Self {
            config,
            room: None,
            clients: HashMap::new(),
        }
    }
}

pub struct ServerState {
    pub admin_token: String,
    pub robots: HashMap<String, Robot>,
}

impl ServerState {
    pub fn new(config: config::Config) -> Self {
        Self {
            admin_token: config.admin_token,
            robots: config.robots
                .into_iter()
                .map(|(nm, rc)| (nm, Robot::new(rc)))
                .collect(),
        }
    }
}
