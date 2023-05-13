import WebSocket from "ws";

const ws = new WebSocket("wss://colonq.computer/rowobots/api/admin/foo?token=foobar");

ws.on("error", console.error);

ws.on("open", function open() {
    ws.send("something");
});

ws.on("message", function message(data) {
    console.log("received: %s", data);
});
