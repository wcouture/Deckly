import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ImageBackground, Pressable, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LoadGameData, { shuffle } from "./DataRetriever";
import { gamePageStyling, selectPageStyling } from "./Styling";

type GameCard = {
  details: string;
  title: string;
  texture: any;
};

export type GameData = {
  startTexture: any;
  cardData: GameCard[];
};

export default function GamePage() {
  const { gameId } = useLocalSearchParams();
  const [cardData, setCardData] = useState([] as GameCard[]);
  const [gameData, setGameData] = useState({} as GameData);

  const [cardImage, setCardImage] = useState({});

  const [cardIndexes, setCardIndexes] = useState([] as number[]);

  const handleCardTap = () => {
    let indexes = cardIndexes;
    let index = indexes.pop();
    setCardIndexes(indexes);

    if (index == undefined) {
      return;
    }

    setCardImage(cardData[index].texture);
  };

  useEffect(() => {
    const data: GameData = LoadGameData(parseInt(gameId as string));

    if (data == undefined) {
      router.back();
      return;
    }

    setGameData(data);
  }, []);

  useEffect(() => {
    if (!gameData.startTexture) {
      return;
    }

    const data: GameCard[] = gameData.cardData;
    setCardData(data);

    let indexes: number[] = [];
    for (let i = 0; i < data.length; i++) {
      indexes.push(i);
    }
    shuffle(indexes);
    setCardIndexes(indexes);

    setCardImage(gameData.startTexture);
  }, [gameData]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={gamePageStyling.safeAreaView}>
        <Pressable onPress={handleCardTap} style={gamePageStyling.gameCard}>
          <ImageBackground
            source={cardImage}
            resizeMode="contain"
            style={selectPageStyling.selectImage}
            borderRadius={18}
          ></ImageBackground>
        </Pressable>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
