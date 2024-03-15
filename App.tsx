import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

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
		<View style={styles.container}>
			<Text>Hello</Text>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
