import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { colors, images, fonts } from "@themes";

type GradientButtonProps = {
	navigateToSignUp: () => void;
};

const GradientButton = ({ navigateToSignUp }: GradientButtonProps) => {
	return (
		<View style={styles.container}>
			<ImageBackground source={images.grain}>
				<LinearGradient
					start={{ x: 0.7, y: 0 }}
					end={{ x: 0, y: 0.6 }}
					colors={[colors.gradientPrimary, colors.gradientSecondary]}
					style={styles.gradient}
				>
					<TouchableOpacity onPress={navigateToSignUp}>
						<Text style={styles.getStartedText}>Get Started</Text>
					</TouchableOpacity>
				</LinearGradient>
			</ImageBackground>
		</View>
	);
};

export default GradientButton;

const styles = StyleSheet.create({
	container: {
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
	gradient: {
		borderRadius: 10,
		opacity: 0.9,
	},
	getStartedText: {
		marginVertical: 13,
		textAlign: "center",
		fontFamily: fonts.primary,
		fontSize: fonts.h3,
		color: colors.white,
	},
});
