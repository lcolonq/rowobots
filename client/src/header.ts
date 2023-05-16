import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import * as Consts from "./consts";

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
    };
    document.title = `rOwObots - ${window.room.name}`;
    const iframe = document.createElement("iframe");
    iframe.allow = "autoplay;";
    iframe.src = `https://vdo.ninja/?view=${window.room.vdon}&nocontrols&cleanoutput&chroma=bbbbbb`;
    bg.replaceChildren(iframe);
  } else {
    window.room = null;
    document.title = "rOwObots";
    bg.replaceChildren();
  }
  const controller: any = document.getElementById("owo-controller");
  if (controller) controller.requestUpdate();
  const header: any = document.getElementById("owo-header");
  if (header) header.requestUpdate();
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

#header-room {
  grid-column: 2;
}

#header-room-label {
  line-height: 4rem;
  font-size: 32px;
}
`;

  async connectedCallback() {
    super.connectedCallback();
    if (window.location.hash) {
      let roomcode = window.location.hash.substring(1);
      await selectRoom(roomcode);
      this.requestUpdate();
    }
    window.onhashchange = async () => {
      let roomcode = window.location.hash.substring(1);
      await selectRoom(roomcode);
      this.requestUpdate();
    };
  }

  render() {
    return html`
    <div id="header">
    <div id="header-title">
    <span>r<span id="owo">OwO</span>bots</span>
    </div>
    <div id="header-room">
    <span id="header-room-label">${window?.room?.name}</span>
    </div>
    </div>
`;
  }
}
