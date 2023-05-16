import WebSocket from "ws";

const ws = new WebSocket("wss://colonq.computer/rowobots/api/channel/foo?token=foobar");

ws.on("error", console.log);

ws.on("open", function open() {
    ws.send("something");
});

ws.on("message", function message(data) {
    console.log("received: %s", data);
});
