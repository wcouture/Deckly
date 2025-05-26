import { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { multiplayerStyling } from "./Styling";

import socket from "./utils/socket";

export default function Multiplayer() {
  const [connectionActive, setConnectionActive] = useState(false);

  useEffect(() => {
    socket.emit("createLobby");
  }, []);

  const connectionSelect = () => {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={multiplayerStyling.safeAreaView}>
          <View style={multiplayerStyling.buttonContainer}>
            <Text style={multiplayerStyling.connectionButton}>
              Start Server
            </Text>
            <Text style={multiplayerStyling.connectionButton}>Join Server</Text>
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
