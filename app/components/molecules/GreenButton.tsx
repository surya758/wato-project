import { StyleSheet, Text, ViewStyle, TouchableOpacity } from "react-native";
import React from "react";

import { colors, fonts } from "@themes";

type GreenButtonProps = {
	title: string;
	onPress: () => void;
	style?: ViewStyle;
};

const GreenButton = ({ title, onPress, style }: GreenButtonProps) => {
	return (
		<TouchableOpacity style={[styles.container, style]} onPress={onPress}>
			<Text style={styles.title}>{title}</Text>
		</TouchableOpacity>
	);
};

export default GreenButton;

const styles = StyleSheet.create({
	container: {
		width: "100%",
		backgroundColor: colors.primary,
		borderRadius: 4,
		alignItems: "center",
		marginTop: 40,
	},
	title: { paddingVertical: 8, fontFamily: fonts.primary, fontSize: fonts.body },
});
