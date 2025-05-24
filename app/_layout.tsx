import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="GamePage" options={{ headerShown: false }} />
        <Stack.Screen name="Multiplayer" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
