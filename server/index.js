const { Server } = require("socket.io");
const PORT = 3000;

const io = new Server(PORT);

io.on("connection", (socket) => {
  socket.emit("connected", true);
});
