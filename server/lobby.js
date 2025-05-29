import { GetPlayer } from "./player";

class Lobby {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.players = [];
  }
}

const LOBBIES = [];

export function CreateLobby(lobby_name) {
  const lobby = new Lobby(LOBBIES.length, lobby_name);

  LOBBIES.push(lobby);

  return lobby.id;
}

export function AddPlayer(lobby_id, player_id) {
  const lobby = LOBBIES[lobby_id];
  const player = GetPlayer(player_id);

  lobby.players.push(player);
  player.socket.join(lobby.name);

  return true;
}
