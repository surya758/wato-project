import { StyleSheet, View } from "react-native";
import React, { PropsWithChildren } from "react";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";

import { colors, images } from "@themes";

const GradientCard = ({ children }: PropsWithChildren) => {
	return (
		<View style={styles.container}>
			<Image source={images.grain}>
				<LinearGradient
					start={{ x: 0, y: 0.5 }}
					end={{ x: 1, y: 0 }}
					locations={[0.1, 0.9]}
					colors={[colors.gradientPrimary, colors.gradientSecondary]}
					style={styles.gradient}
				>
					<View style={styles.childrenContainer}>{children}</View>
				</LinearGradient>
			</Image>
		</View>
	);
};

export default GradientCard;

const styles = StyleSheet.create({
	container: {
		overflow: "hidden",
		marginTop: 32,
		borderRadius: 10,
	},
	gradient: {
		opacity: 0.9,
	},
	childrenContainer: { paddingHorizontal: 10 },
});
