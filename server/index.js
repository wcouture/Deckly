const http = require("http");
const httpServer = http.createServer();

const { Server } = require("socket.io");

const io = new Server(httpServer);
const PORT = 3000;

io.on("connection", (socket) => {
  socket.send("connected");
});

io.on("createLobby", (socket) => {
  socket.emit("lobbyCreated", "lobbyCreated");
});

httpServer.listen(PORT);
