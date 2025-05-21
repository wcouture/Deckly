import { ImageBackground, View } from "react-native";
import { GameCard } from "./GamePage";
import { gamePageStyling, selectPageStyling } from "./Styling";

export default function RenderedGameCard(props: {
  item: GameCard;
  index: number;
}) {
  return (
    <View style={gamePageStyling.gameCard}>
      <ImageBackground
        source={props.item.texture}
        resizeMode="contain"
        style={selectPageStyling.selectImage}
        borderRadius={18}
      ></ImageBackground>
    </View>
  );
}
