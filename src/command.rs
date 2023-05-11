use serde::{Serialize, Deserialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum Button {
    Up,
    Down,
    Left,
    Right,
    A,
    B,
    Start,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum Action {
    Press,
    Release,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Command {
    pub button: Button,
    pub action: Action,
}
