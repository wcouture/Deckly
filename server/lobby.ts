import { GetPlayer, Player } from "./player";

type Lobby = {
  name: string;
  id: number;
  players: Player[];
};

const LOBBIES: Lobby[] = [];

export function CreateLobby(lobby_name: string): number {
  const lobby = {
    name: lobby_name,
    id: LOBBIES.length,
    players: [],
  };

  LOBBIES.push(lobby);

  return lobby.id;
}

export function AddPlayer(lobby_id: number, player_id: number): boolean {
  const lobby = LOBBIES[lobby_id];
  const player = GetPlayer(player_id);

  lobby.players.push(player);

  return true;
}
