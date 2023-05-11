use std::collections::HashMap;

use serde::{Serialize, Deserialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RobotConfig {
    pub name: String, // human-readable name
    pub vdon_room: String, // VDO Ninja room code
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Config {
    pub admin_token: String,
    pub robots: HashMap<String, RobotConfig>,
}
