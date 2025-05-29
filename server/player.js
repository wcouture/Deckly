class Player {
  constructor(name, id, socket) {
    this.name = name;
    this.id = id;
    this.socket = socket;
  }
}

const PLAYERS = [];

export function CreatePlayer(player_name, sock) {
  const player = new Player(player_name, PLAYERS.length, sock);

  PLAYERS.push(player);

  return player.id;
}

export function GetPlayer(id) {
  return PLAYERS[id];
}
