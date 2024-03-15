import React, { useCallback } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import { AuthStackParamList } from "@routes/AuthRoute";
import { colors, images, fonts } from "@themes";
import Layout from "@atoms/Layout";
import GradientButton from "@molecules/GradientButton";

type GetStartedScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, "GetStarted">;

const GetStartedScreen = () => {
	const navigation = useNavigation<GetStartedScreenNavigationProp>();

	const navigateToSignUp = () => navigation.navigate("SignUp");

	return (
		<Layout>
			<View style={styles.upperContainer} />
			<View style={styles.lowerContainer}>
				<View>
					<Text style={styles.titleText}>wato</Text>
					<Text style={styles.subtitleText}>{`Zero Cost\nWhatsApp Messaging\nplatform`}</Text>
				</View>

				<GradientButton navigateToSignUp={navigateToSignUp} />

				<View style={styles.signInContainer}>
					<Text style={styles.alreadyAccountText}>Already have an account? </Text>
					<Pressable onPress={() => navigation.navigate("SignIn")}>
						<Text style={styles.signInText}>Sign in instead</Text>
					</Pressable>
				</View>
			</View>

			<Image source={images.sparkles} style={styles.sparklesImage} />
			<Image source={images.rays} style={styles.raysImage} resizeMode='stretch' />
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
	signInContainer: { flexDirection: "row", justifyContent: "center", marginTop: 20 },
	alreadyAccountText: { color: colors.white, fontFamily: fonts.primary, opacity: 0.7 },
	signInText: { color: colors.primary },
});
