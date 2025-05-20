import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { GameOption } from ".";
import { selectPageStyling } from "./Styling";

export default function SelectCard(props: { item: GameOption; index: number }) {
  const [cardStyle, setCardStyle] = useState({});

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
    <View style={cardStyle}>
      <Text style={selectPageStyling.gameCardText}>{props.index}</Text>
    </View>
  );
}
