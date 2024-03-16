import "react-native-gesture-handler";

import { Text } from "react-native";
import { useFonts } from "expo-font";

import RootRoute from "@routes/RootRoute";
import AuthProvider from "@context/AuthContext";

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
		<AuthProvider>
			<RootRoute />
		</AuthProvider>
	);
}
