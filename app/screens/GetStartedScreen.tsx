import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import { AuthStackParamList } from "@routes/AuthRoute";
import { colors, images, fonts } from "@themes";
import Layout from "@atoms/Layout";
import GradientButton from "@molecules/GradientButton";
import MixedText from "@molecules/MixedText";

type GetStartedScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, "GetStarted">;

const GetStartedScreen = () => {
	const navigation = useNavigation<GetStartedScreenNavigationProp>();

	const navigateToSignUp = () => navigation.navigate("SignUp");

	return (
		<Layout>
			<View style={styles.upperContainer} />
			<View style={styles.lowerContainer}>
				{/* Render banner content */}

				<View>
					<Text style={styles.titleText}>wato</Text>
					<Text style={styles.subtitleText}>{`Zero Cost\nWhatsApp Messaging\nplatform`}</Text>
				</View>

				<GradientButton navigateToSignUp={navigateToSignUp} />

				<MixedText
					onPress={() => navigation.navigate("SignIn")}
					greyText='Already have an account?'
					greenText='Sign in instead'
				/>
			</View>

			<Image source={images.sparkles} style={styles.sparklesImage} />
			<Image source={images.rays} style={styles.raysImage} contentFit='fill' />
		</Layout>
	);
};

export default GetStartedScreen;

const styles = StyleSheet.create({
	upperContainer: {
		flex: 1,
	},
	lowerContainer: {
		flex: 1.5,
		marginHorizontal: 20,
	},
	sparklesImage: {
		width: "100%",
		height: "60%",
		position: "absolute",
		opacity: 0.4,
		transform: [{ rotate: "30deg" }],
	},
	raysImage: {
		width: "100%",
		height: "60%",
		position: "absolute",
	},
	titleText: {
		fontSize: fonts.h1,
		color: colors.white,
		fontFamily: fonts.heading1,
	},
	subtitleText: {
		marginTop: 24,
		fontSize: fonts.h2,
		color: colors.white,
		fontFamily: fonts.heading2,
	},
});
