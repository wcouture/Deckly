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
    height: 420,
    alignItems: "center",
    justifyContent: "center",

    borderRadius: 25,
    borderWidth: 3,
    boxShadow: "1px 1px 10px 3px rgba(0,0,0,0.2);",

    alignSelf: "center",
    marginTop: "auto",
    marginBottom: "auto",
  },

  selectImage: {
    width: "100%",
    height: "100%",
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

export const gamePageStyling = StyleSheet.create({
  safeAreaView: {
    width: "100%",
    height: "100%",

    justifyContent: "center",
    alignItems: "center",
  },

  gameCard: {
    width: 347,
    height: 500,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "black",
    backgroundColor: "white",
    alignContent: "center",

    alignSelf: "center",
    alignItems: "center",

    marginTop: "auto",
    marginBottom: "auto",
  },

  gameExitButton: {
    top: -50,
    textDecorationLine: "underline",
  },
});

export const multiplayerStyling = StyleSheet.create({
  safeAreaView: {
    alignItems: "center",
    height: "100%",
  },

  buttonContainer: {
    marginTop: "auto",
    marginBottom: "auto",
  },

  connectionButton: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 15,

    marginBottom: 10,
    padding: 15,
  },
});
