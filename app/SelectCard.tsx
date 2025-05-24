import { router } from "expo-router";
import { useState } from "react";
import { ImageBackground, Pressable, Text } from "react-native";
import { GameOption } from ".";
import { selectPageStyling } from "./Styling";

export default function SelectCard(props: { item: GameOption; index: number }) {
  const [cardStyle, setCardStyle] = useState({});
  const [gameImage, setGameImage] = useState("");

  const handleCardSelect = () => {
    if (props.item.multiplayer) {
      router.push(`/Multiplayer`);
      return;
    }
    router.push(`/GamePage?gameId=${props.index}`);
  };

  return (
    <Pressable
      onPress={handleCardSelect}
      style={selectPageStyling.gameSelectCard}
    >
      <ImageBackground
        source={props.item.image}
        borderRadius={25}
        style={selectPageStyling.selectImage}
      >
        <Text style={selectPageStyling.gameCardText}>{props.index}</Text>
      </ImageBackground>
    </Pressable>
  );
}
