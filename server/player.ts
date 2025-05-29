import { Socket } from "socket.io-client";

export type Player = {
  name: string;
  id: number;
  socket: Socket;
};

const PLAYERS: Player[] = [];

export function CreatePlayer(player_name: string, sock: Socket): number {
  const player = {
    name: player_name,
    id: PLAYERS.length,
    socket: sock,
  };

  PLAYERS.push(player);

  return player.id;
}

export function GetPlayer(id: number): Player {
  return PLAYERS[id];
}
