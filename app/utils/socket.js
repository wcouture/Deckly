import { io } from "socket.io-client";
export const socket = io.connect("http://localhost:3000", {
  transports: ["websocket"],
});

socket.on("connect", () => {
  console.log("connected");
});

socket.on("lobbyCreated", (data) => {
  console.log("lobbyCreated", data);
});

export function createLobby() {
  socket.emit("createLobby", "newLobby");
}

export function joinLobby(lobbyName) {
  socket.emit("joinLobby", lobbyName);

  socket.on("lobbyJoined", (data) => {
    console.log("lobbyJoined", data);
  });

  socket.on("lobbyNotFound", (data) => {
    console.log("lobbyNotFound", data);
  });
}

export function closeConnection() {
  socket.disconnect();
}
