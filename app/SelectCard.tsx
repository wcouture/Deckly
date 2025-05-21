import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, Text } from "react-native";
import { GameOption } from ".";
import { selectPageStyling } from "./Styling";

export default function SelectCard(props: { item: GameOption; index: number }) {
  const [cardStyle, setCardStyle] = useState({});

  const handleCardSelect = () => {
    router.push(`/GamePage?gameId=${props.index}`);
  };

  useEffect(() => {
    let style = [];
    style.push(selectPageStyling.gameSelectCard);

    const customStyling = {
      backgroundColor: props.item.color,
    };

    style.push(customStyling);

    setCardStyle(style);
  }, []);

  return (
    <Pressable onPress={handleCardSelect} style={cardStyle}>
      <Text style={selectPageStyling.gameCardText}>{props.index}</Text>
    </Pressable>
  );
}
