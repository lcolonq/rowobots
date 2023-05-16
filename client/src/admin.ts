import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { map } from "lit/directives/map.js";

import * as Consts from "./consts";

function randomRoomCode() {
  const arr = new Uint8Array(10);
  window.crypto.getRandomValues(arr);
  return Array.from(arr, (n) => n.toString(16).padStart(2, "0")).join("");
}

async function fetchAdminInfo(token: string) {
  const resp = await fetch(`${Consts.API_URL}/api/admin?token=${encodeURIComponent(token)}`);
  const respjson = await resp.json();
  if (respjson.robots) {
    window.adminInfo = respjson;
  }
  const admin: any = document.getElementById("owo-admin");
  if (admin) admin.requestUpdate();
}

@customElement("owo-admin-header")
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
  white-space: nowrap;
}

#header-title {
  grid-column: 1;
  font-size: 32px;
  line-height: 4rem;
}

#owo {
  color: #32cd32;
}

#header-token {
  grid-column: 2;
}

#header-token-label {
  line-height: 4rem;
  font-size: 32px;
}

#header-token-entry {
  vertical-align: middle;
}
`;

  @property()
  initial: string;

  async updateToken(ev: any) {
    const token = ev.target.value;
    window.adminToken = token;
    window.adminInfo = null;
    fetchAdminInfo(window.adminToken);
  }

  render() {
    return html`
    <div id="header">
    <div id="header-title">
    <span>r<span id="owo">OwO</span>bots admin</span>
    </div>
    <div id="header-token">
    <span id="header-token-label">token:</label>
    <input @change=${this.updateToken} id="header-token-entry" type="password" value=${this.initial}></input>
    </div>
    </div>
`;
  }
}

@customElement("owo-admin-robot")
export class Robot extends LitElement {
  static styles = css`
#robot {
  font-family: monospace;
  display: grid;
  grid-template-columns: 5fr 10fr 5rem 4rem;
}
#robot:hover {
  background-color: #dddddd;
}
#robot-name {
  grid-column: 1;
}
#robot-room {
  grid-column: 2;
}
#robot-vdon {
  grid-column: 3;
}
#robot-ws {
  grid-column: 4;
}
`;

  @property()
  robotid: string;

  copyRoom() {
    const robot = window.adminInfo.robots[this.robotid];
    navigator.clipboard.writeText(robot.room);
  }

  async setRandomRoom() {
    const code = randomRoomCode();
    const resp = await fetch(`${Consts.API_URL}/api/admin/${encodeURIComponent(this.robotid)}/room?token=${encodeURIComponent(window.adminToken)}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        room: randomRoomCode(),
      }),
    });
    if (resp.status === 200) {
      await fetchAdminInfo(window.adminToken);
      this.requestUpdate();
    }
  }

  copyWs() {
    navigator.clipboard.writeText(`wss://colonq.computer/rowobots/api/channel/${encodeURIComponent(this.robotid)}?token=${encodeURIComponent(window.adminToken)}`);
  }

  render() {
    const robot = window.adminInfo.robots[this.robotid];
    return html`
<div id="robot">
  <div id="robot-name">${robot.config.name}</div>
  <div id="robot-room">
    <a target="_blank" rel="noopener noreferrer" href="/rowobots#${robot.room}">${robot.room}</a>
    <button @click=${this.setRandomRoom}>↻</button>
  </div>
  <div id="robot-vdon"><a target="_blank" rel="noopener noreferrer" href="https://vdo.ninja?push=${robot.config.vdon_room}">${robot.config.vdon_room}</a></div>
  <div id="robot-ws"><a href="#" @click=${this.copyWs}>copy</a></div>
</div>
`;
  }
}

@customElement("owo-admin")
export class Admin extends LitElement {
  static styles = css`
#robots {
  padding: 0.5rem;
}
#robot-heading {
  font-family: monospace;
  font-weight: bold;
  display: grid;
  grid-template-columns: 5fr 10fr 5rem 4rem;
  margin-bottom: 0.5rem;
}
#robot-name {
  grid-column: 1;
}
#robot-room {
  grid-column: 2;
}
#robot-vdon {
  grid-column: 3;
}
#robot-ws {
  grid-column: 4;
}
#auth-error {
  font-family: monospace;
  text-align: center;
  color: red;
}
`;

  render() {
    if (window.adminInfo) {
      return html`
<div id="robots">
  <div id="robot-heading">
    <div id="robot-name">name</div>
    <div id="robot-room">room</div>
    <div id="robot-vdon">vdon</div>
    <div id="robot-ws">socket</div>
  </div>
${map(Object.keys(window.adminInfo.robots).sort(), (rid) => html`
  <owo-admin-robot .robotid=${rid}></owo-admin-robot>
`)}
</div>
`;
    } else if (window.adminToken) {
      return html`
<div id="auth-error">
  <h1>invalid token</h1>
</div>
`;
    } else {
      return html`
<div id="auth-error">
  <h1>please enter admin token</h1>
</div>
`;
    }
  }
}
