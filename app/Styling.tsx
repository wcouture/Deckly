import { StyleSheet, View } from "react-native";

export default function Styling() {
  return <View></View>;
}

export const selectPageStyling = StyleSheet.create({
  safeAreaView: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
  },

  gameSelectCard: {
    width: 300,
    height: 500,
    alignItems: "center",
    justifyContent: "center",

    borderRadius: 25,
    borderWidth: 3,
    boxShadow: "1px 1px 10px 3px rgba(0,0,0,0.2);",

    alignSelf: "center",
    marginTop: "auto",
    marginBottom: "auto",
  },

  gameCardText: {
    fontSize: 35,
    fontWeight: 500,
    color: "white",
  },

  dotsRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    top: -50,
  },
  selectDot: {
    width: 10,
    height: 10,
    borderRadius: 20,
    borderColor: "#555",
    borderWidth: 2,
  },
  activeDot: {
    backgroundColor: "#888",
  },
});
