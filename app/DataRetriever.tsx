import { GameData } from "./GamePage";

export default function LoadGameData(id: number): GameData {
  switch (id) {
    case 0:
      const data = require("./game_data/cardDeck");
      return data.PlayingCardData;
    case 1:
      return require("./game_data/kingsCup.js") as GameData;
  }
  return {
    cardData: [],
    topCard: {
      details: "",
      title: "",
      texture: undefined,
    },
    bottomCard: {
      details: "",
      title: "",
      texture: undefined,
    },
  };
}

export function shuffle(array: any[]) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}
