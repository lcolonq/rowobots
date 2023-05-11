mod config;
mod state;
mod web;
mod command;

use figment::providers::Format;

#[rocket::main]
async fn main() -> Result<(), rocket::Error> {
    let figment = figment::Figment::from(rocket::Config::default())
        .merge(figment::providers::Toml::file("rowobots.toml"));

    let config: config::Config = figment.extract().expect("failed to load config");
    let initial = web::WebState::new(config);

    let rocket = rocket::custom(figment);
    rocket
        .manage(initial)
        .register("/api", rocket::catchers![
            web::default_catcher,
        ])
        .mount("/api", rocket::routes![
            web::get_admin,
            web::get_admin_bot_channel,
            web::put_admin_room,
            web::get_bot,
            web::get_room,
            web::post_bot,
        ])
        .mount("/", rocket::fs::FileServer::from("client/www/"))
        .launch()
        .await?;
    Ok(())
}
