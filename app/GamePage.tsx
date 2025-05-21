import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Dimensions, SafeAreaView, Text } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LoadGameData, { shuffle } from "./DataRetriever";
import RenderedGameCard from "./GameCard";
import { gamePageStyling } from "./Styling";

export type GameCard = {
  details: string;
  title: string;
  texture: any;
};

export type GameData = {
  topCard: GameCard;
  bottomCard: GameCard;
  cardData: GameCard[];
};

export default function GamePage() {
  const { gameId } = useLocalSearchParams();
  const [screenWidth, setScreenWidth] = useState(400);

  const [cardData, setCardData] = useState([] as GameCard[]);

  const exitGame = () => {
    router.back();
  };

  useEffect(() => {
    setScreenWidth(Dimensions.get("window").width);
    const data: GameData = LoadGameData(parseInt(gameId as string));

    if (data == undefined) {
      router.back();
      return;
    }

    let cards = data.cardData;
    shuffle(cards);

    let final_arr = [data.topCard, cards, data.bottomCard];
    setCardData(final_arr.flat());
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={gamePageStyling.safeAreaView}>
        <Carousel
          width={screenWidth}
          loop={false}
          snapEnabled={true}
          data={cardData}
          mode={"horizontal-stack"}
          fixedDirection="negative"
          modeConfig={{
            snapDirection: "left",
            stackInterval: 10,
            showLength: 5,
          }}
          renderItem={RenderedGameCard}
        />
        <Text onPress={exitGame} style={gamePageStyling.gameExitButton}>
          exit game
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
