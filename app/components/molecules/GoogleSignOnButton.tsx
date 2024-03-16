import { StyleSheet, Text, Pressable, Image } from "react-native";
import React from "react";
import { colors, images, fonts } from "@themes";

type GoogleSignOnButtonProps = {
	onPress: () => void;
};

const GoogleSignOnButton = ({ onPress }: GoogleSignOnButtonProps) => {
	return (
		<Pressable style={styles.container} onPress={onPress}>
			<Image source={images.google} style={styles.googleImage} />
			<Text style={styles.continueText}>Continue With Google</Text>
		</Pressable>
	);
};

export default GoogleSignOnButton;

const styles = StyleSheet.create({
	container: {
		borderWidth: 1,
		borderColor: colors.white,
		borderRadius: 4,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		paddingVertical: 8,
		marginBottom: 20,
	},
	googleImage: { marginRight: 8, height: 20, width: 20 },
	continueText: { fontFamily: fonts.primary, fontSize: fonts.body, color: colors.white },
});
