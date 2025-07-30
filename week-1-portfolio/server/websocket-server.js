const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 3000 });

let clients = 0;

wss.on("connection", (ws) => {
  clients++;
  console.log(`New client connected. Total clients: ${clients}`);
  brodadcast(clients);

  ws.on("close", () => {
    clients--;
    console.log(`Client disconnected. Total clients: ${clients}`);
    brodadcast(clients);
  });
});

function brodadcast(count) {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(count);
    }
  });
}
