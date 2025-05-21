import { GameData } from "./GamePage";

import CardDeckData from "./game_data/cardDeck.json";

const gameDataCache: GameData[] = [CardDeckData[0]];

export default function LoadGameData(id: number): GameData {
  return gameDataCache[id];
}
