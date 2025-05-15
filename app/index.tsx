import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontFamily: "BagelFatOne", fontSize: 20, color: "#333" }}>
        Welcome to Deckly!
      </Text>
    </View>
  );
}
