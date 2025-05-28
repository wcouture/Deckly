import { io } from "socket.io-client";
const socket = io.connect("ws://apps.willc-dev.net");

socket.on("connected", (arg) => {
  console.log(arg);
});

socket.emit("howdy", "stranger");

export default socket;
