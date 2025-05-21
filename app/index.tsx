import { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import SelectCard from "./SelectCard";
import { selectPageStyling } from "./Styling";

export type GameOption = {
  image: any;
  active: boolean;
};

const data: GameOption[] = [
  {
    image: require("./game_data/playingCards/card-back-red.png"),
    active: false,
  },
];

export default function Index() {
  const [gameData, setGameData] = useState([] as GameOption[]);
  const [activeIndex, setActiveIndex] = useState(0);

  const [screenWidth, setScreenWidth] = useState(400);

  useEffect(() => {
    setScreenWidth(Dimensions.get("window").width);

    data[0].active = true;
    setGameData(data);
    setActiveIndex(0);
  }, []);

  const updateSelectedGame = (index: number) => {
    data[activeIndex].active = false;
    data[index].active = true;

    setActiveIndex(index);
    setGameData(data);
  };

  const progressUpdate = (value: number) => {
    let index = Math.round(Math.abs(value / screenWidth)) % gameData.length;
    if (index != activeIndex) {
      updateSelectedGame(index);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={selectPageStyling.safeAreaView}>
        <Carousel
          testID={"xxx"}
          width={screenWidth}
          loop={true}
          snapEnabled={true}
          data={gameData}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 100,
          }}
          renderItem={SelectCard}
          onProgressChange={progressUpdate}
        />
        <View style={selectPageStyling.dotsRow}>
          {gameData.map((value, index) => {
            let dotStyle = [];
            dotStyle.push(selectPageStyling.selectDot);

            if (value.active) dotStyle.push(selectPageStyling.activeDot);
            return <View key={index} style={dotStyle}></View>;
          })}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
