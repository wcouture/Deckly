import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LoadGameData from "./DataRetriever";
import { gamePageStyling } from "./Styling";

type GameCard = {
  details: string;
  title: string;
  suit: string;
  value: number;
};

export type GameData = {
  baseTexture: string;
  cardData: GameCard[];
};

export default function GamePage() {
  const { gameId } = useLocalSearchParams();
  const [cardData, setCardData] = useState([] as GameCard[]);
  const [gameData, setGameData] = useState({} as GameData);

  useEffect(() => {
    const data: GameData = LoadGameData(parseInt(gameId as string));

    if (data == undefined) {
      router.back();
      return;
    }

    setGameData(data);
  }, []);

  useEffect(() => {
    if (!gameData.baseTexture) {
      return;
    }

    const data: GameCard[] = gameData.cardData;
    setCardData(data);
  }, [gameData]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={gamePageStyling.safeAreaView}>
        <View style={gamePageStyling.gameCard}>
          <Text>{gameData?.baseTexture}</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
