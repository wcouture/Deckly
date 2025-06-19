const { Server } = require("socket.io");
const io = new Server();

const PORT = 3000;

io.on("connection", (socket) => {
  console.log("connected, socket: ", socket.id);
  socket.send("connected");
});

io.on("createLobby", (socket) => {
  socket.emit("lobbyCreated", "lobbyCreated");
});

io.listen(PORT);
