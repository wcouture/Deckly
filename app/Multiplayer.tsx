import { useEffect, useState } from "react";
import { AppState, SafeAreaView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { multiplayerStyling } from "./Styling";

import { closeConnection, createLobby, joinLobby } from "./utils/socket";

export default function Multiplayer() {
  const [connectionActive, setConnectionActive] = useState(false);

  useEffect(() => {
    const handleAppStateChange = (nextAppState: string) => {
      if (nextAppState === "background" || nextAppState === "inactive") {
        closeConnection();
      }
    };

    const subscription = AppState.addEventListener(
      "change",
      handleAppStateChange
    );

    return () => {
      subscription.remove();
      closeConnection();
    };
  }, []);

  const connectionSelect = () => {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={multiplayerStyling.safeAreaView}>
          <View style={multiplayerStyling.buttonContainer}>
            <Text
              onPress={createLobby}
              style={multiplayerStyling.connectionButton}
            >
              Start Server
            </Text>
            <Text
              onPress={() => joinLobby("lobby2")}
              style={multiplayerStyling.connectionButton}
            >
              Join Server
            </Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  };

  if (connectionActive) {
  } else {
    return connectionSelect();
  }
}
