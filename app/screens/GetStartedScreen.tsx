import React from "react";
import { StyleSheet, Text, View, Image, Pressable, ImageBackground } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import { AuthStackParamList } from "@routes/AuthRoute";
import { colors, images, fonts } from "@themes";
import Layout from "@atoms/Layout";

type GetStartedScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, "GetStarted">;

const GetStartedScreen = () => {
	const navigation = useNavigation<GetStartedScreenNavigationProp>();
	return (
		<Layout>
			<View style={styles.upperContainer}>
				<View>
					<Text style={styles.title}>wato</Text>
					<Text style={styles.subtitle}>{`Zero Cost\nWhatsApp Messaging\nplatform`}</Text>
				</View>

				<View style={styles.lowerContainer}>
					<ImageBackground source={images.grain}>
						<LinearGradient
							start={{ x: 0.7, y: 0 }}
							end={{ x: 0, y: 0 }}
							colors={[colors.gradientPrimary, colors.gradientSecondary]}
							style={styles.gradientStyle}
						>
							<Pressable>
								<Text style={styles.getStartedText}>Get Started</Text>
							</Pressable>
						</LinearGradient>
					</ImageBackground>
				</View>
			</View>

			<Image source={images.sparkles} style={styles.sparklesImageStyle} />
			<Image source={images.rays} style={styles.raysImageStyle} resizeMode='stretch' />
		</Layout>
	);
};

export default GetStartedScreen;

const styles = StyleSheet.create({
	upperContainer: {
		flex: 1,
		marginHorizontal: 20,
		borderColor: "red",
		justifyContent: "center",
	},
	sparklesImageStyle: {
		width: "100%",
		height: "60%",
		position: "absolute",
		opacity: 0.4,
		transform: [{ rotate: "30deg" }],
	},
	raysImageStyle: {
		width: "100%",
		height: "60%",
		position: "absolute",
	},
	title: {
		fontSize: fonts.h1,
		color: colors.white,
		fontFamily: fonts.heading1,
	},
	subtitle: {
		marginTop: 24,
		fontSize: fonts.h2,
		color: colors.white,
		fontFamily: fonts.heading2,
	},
	lowerContainer: {
		overflow: "hidden",
		borderWidth: 1,
		borderColor: "white",
		borderRadius: 10,
		marginTop: 74,
		elevation: 2,
		shadowColor: colors.gradientPrimary,
		shadowOffset: { height: 6, width: 6 },
		shadowOpacity: 0.6,
		shadowRadius: 4,
	},
	gradientStyle: {
		borderRadius: 10,
		opacity: 0.9,
	},
	getStartedText: {
		marginVertical: 13,
		textAlign: "center",
		fontFamily: fonts.regular,
		fontSize: fonts.h3,
		color: colors.white,
	},
});
