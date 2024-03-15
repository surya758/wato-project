import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import RootRoute from "./app/routes/RootRoute";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
	const [fontsLoaded, fontError] = useFonts({
		"GT-Super-Text-Regular-Trial": require("./app/assets/fonts/GT-Super-Text-Regular-Trial.otf"),
		"Inter-Regular": require("./app/assets/fonts/Inter-Regular.ttf"),
		"Sequel-Sans-Black-Body": require("./app/assets/fonts/Sequel Sans Black Body.ttf"),
	});

	if (!fontsLoaded && !fontError) {
		return <Text> Loading... </Text>;
	}

	return (
		<NavigationContainer>
			<RootRoute />
		</NavigationContainer>
	);
}
