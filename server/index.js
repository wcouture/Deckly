const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer);

const PORT = 3000;

const SOCKETS = [];

const LOBBIES = [];

io.on("connection", (socket) => {
  const sock = {
    id: socket.id,
    socket: socket,
    lobby: null,
  };
  SOCKETS.push(sock);

  socket.on("createLobby", (lobbyName) => {
    LOBBIES.push(lobbyName);
    sock.lobby = lobbyName;
    socket.join(lobbyName);
    socket.emit("lobbyCreated", lobbyName);
    console.log("lobbyCreated: ", lobbyName);
  });

  socket.on("joinLobby", (lobbyName) => {
    if (!LOBBIES.includes(lobbyName)) {
      socket.emit("lobbyNotFound", "lobbyNotFound: " + lobbyName);
      return;
    }
    sock.lobby = lobbyName;
    socket.join(lobbyName);
    socket.emit("lobbyJoined", lobbyName);
  });

  socket.on("disconnect", () => {
    const socketLobby = sock.lobby;
    console.log("deleting lobby: ", socketLobby);

    LOBBIES.splice(LOBBIES.indexOf(sock.lobby), 1);
    SOCKETS.splice(SOCKETS.indexOf(sock), 1);

    sock.socket.leave(socketLobby);
    printSockets();
    printLobbies();
  });

  printSockets();
  printLobbies();
});

function printSockets() {
  console.log("SOCKETS: ");
  for (let i = 0; i < SOCKETS.length; i++) {
    console.log(SOCKETS[i].id);
  }
}

function printLobbies() {
  console.log("LOBBIES: ");
  for (let i = 0; i < LOBBIES.length; i++) {
    console.log(LOBBIES[i]);
  }
}

httpServer.listen(PORT);
