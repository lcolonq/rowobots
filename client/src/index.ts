import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import * as Consts from "./consts";

import "./index.css";

async function selectRoom(roomcode: string) {
  window.location.hash = `#${roomcode}`;
  const resp = await fetch(`${Consts.API_URL}/api/room/${encodeURIComponent(roomcode)}`);
  const respjson = await resp.json();
  const bg = document.getElementById("owo-background");
  if (!bg) return;
  if (respjson.id && respjson.robot) {
    window.room = {
      room: roomcode,
      id: respjson.id,
      name: respjson.robot.name,
      vdon: respjson.robot.vdon_room,
    }
    const iframe = document.createElement("iframe");
    iframe.allow = "autoplay;";
    iframe.src = `https://vdo.ninja/?view=${window.room.vdon}&nocontrols&cleanoutput&chroma=bbbbbb`;
    bg.replaceChildren(iframe);
  } else {
    window.room = null;
    bg.replaceChildren();
  }
  const controller: any = document.getElementById("owo-controller");
  if (controller) controller.requestUpdate();
}

@customElement("owo-controller")
export class Controller extends LitElement {
  static styles = css`
  .button {
  text-align: center;
  line-height: 5rem;
  font-weight: bold;
  color: white;
  background-color: #555555;
  user-select: none;
  position: absolute;
  opacity: 0.6;
  width: 5rem;
  height: 5rem;
}
.button:active {
  opacity: 0.9;
}
#dpad {
  position: absolute;
}
#up {
  left: 5rem;
}
#down {
  left: 5rem;
  top: 10rem;
}
#left {
  top: 5rem;
}
#right {
  left: 10rem;
  top: 5rem;
}
#facebuttons {
  position: absolute;
  right: 0rem;
}
#b {
  top: 5rem;
  right: 10rem;
}
#a {
  top: 5rem;
  right: 2.5rem;
}
#copium-image {
  text-align: center;
}
img {
  display: block;
  width: 112px;
  margin: auto;
}
`;

  async sendCommand(button: string, press: string) {
    if (window.room) {
      const resp = await fetch(`${Consts.API_URL}/api/bot/${encodeURIComponent(window.room.id)}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          room: window.room.room,
          command: {
            button: button,
            action: press,
          },
        }),
      });
    }
  }

  async handleButton(ev: any) {
    let press = null;
    if (ev.type === "mousedown") {
      press = "Press";
    } else if (ev.type === "mouseup") {
      press = "Release";
    }
    let button = ev.target.textContent;
    if (press) this.sendCommand(button, press);
  }

  render() {
    if (window.room) {
      return html`
      <div id="dpad">
      <div @mousedown=${this.handleButton} @mouseup=${this.handleButton} id="up" class="button">Up</div>
      <div @mousedown=${this.handleButton} @mouseup=${this.handleButton} id="left" class="button">Left</div>
      <div @mousedown=${this.handleButton} @mouseup=${this.handleButton} id="right" class="button">Right</div>
      <div @mousedown=${this.handleButton} @mouseup=${this.handleButton} id="down" class="button">Down</div>
      </div>
      <div id="facebuttons">
      <div @mousedown=${this.handleButton} @mouseup=${this.handleButton} id="b" class="button">B</div>
      <div @mousedown=${this.handleButton} @mouseup=${this.handleButton} id="a" class="button">A</div>
      </div>
`;
    } else {
      return html`
<div id="copium-image">
  <img src="copium.png"></img>
</div>
`;
    }
  }
}

@customElement("owo-header")
export class Header extends LitElement {
  static styles = css`
#header {
  position: absolute;
  width: 100%;
  height: 4rem;
  font-family: monospace;
  text-align: center;
  color: white;
  background-color: black;
  top: 0px;
  left: 0px;
  display: grid;
}

#header-title {
  grid-column: 1;
  font-size: 32px;
  line-height: 4rem;
}

#owo {
  color: #32cd32;
}

#header-room {
  grid-column: 2;
}

#header-room-label {
  line-height: 4rem;
  font-size: 32px;
}

#header-room-entry {
  vertical-align: middle;
}
`;

  @property()
  initial: string;

  async updateRoom(ev: any) {
    if (ev.key === "Enter") {
      const roomcode = ev.target.value;
      selectRoom(roomcode);
    }
  }

  render() {
    return html`
<div id="header">
  <div id="header-title">
    <span>r<span id="owo">OwO</span>bots</span>
  </div>
  <div id="header-room">
    <span id="header-room-label">room:</label>
    <input @keypress=${this.updateRoom} id="header-room-entry" type="text" value=${this.initial}></input>
  </div>
</div>
`;
  }
}

if (window.location.hash) {
  let roomcode = window.location.hash.substring(1);
  let header: any = document.getElementById("owo-header");
  if (header) header.initial = roomcode;
  selectRoom(roomcode);
}
