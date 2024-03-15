import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";

import RootRoute from "@routes/RootRoute";

export default function App() {
	const [fontsLoaded, fontError] = useFonts({
		"GT-Super-Text-Regular-Trial": require("@assets/fonts/GT-Super-Text-Regular-Trial.otf"),
		"Inter-Regular": require("@assets/fonts/Inter-Regular.ttf"),
		"Sequel-Sans-Black-Body": require("@assets/fonts/Sequel Sans Black Body.ttf"),
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
