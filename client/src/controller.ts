import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import * as Consts from "./consts";

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
      if (resp.status != 200) {
        window.room = null;
        document.title = "rOwObots";
        const bg = document.getElementById("owo-background");
        if (bg) bg.replaceChildren();
        this.requestUpdate();
        const header: any = document.getElementById("owo-header");
        if (header) header.requestUpdate();
      }
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
