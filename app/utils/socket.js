import { io } from "socket.io-client";
const socket = io.connect("ws://apps.willc-dev.net");

socket.on("connected", (arg) => {
  console.log(arg);
});

socket.on("lobbyCreated", (arg) => {
  console.log(arg);
});

export default socket;
