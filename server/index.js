const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer);

const PORT = 3000;

io.on("connection", (socket) => {
  console.log("connected, socket: ", socket.id);
  socket.send("connected");
});

io.on("createLobby", (socket) => {
  socket.emit("lobbyCreated", "lobbyCreated");
});

httpServer.listen(PORT);
