const { Server } = require("socket.io");
const PORT = 3000;

const SERVER = new Server(PORT);

io.on("connection", (socket) => {
  socket.emit("connected", true);
});
