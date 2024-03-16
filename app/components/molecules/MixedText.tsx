import { StyleSheet, Text, View, TouchableOpacity, ViewStyle } from "react-native";
import React from "react";

import { colors, fonts } from "@themes";

type MixedTextProps = {
	greyText: string;
	greenText: string;
	onPress: () => void;
	style?: ViewStyle;
};

const MixedText = ({ greyText, greenText, onPress, style }: MixedTextProps) => {
	return (
		<View style={[styles.container, style]}>
			<Text style={styles.greyText}>{greyText} </Text>
			<TouchableOpacity onPress={onPress}>
				<Text style={styles.greenText}>{greenText}</Text>
			</TouchableOpacity>
		</View>
	);
};

export default MixedText;

const styles = StyleSheet.create({
	container: { flexDirection: "row", alignSelf: "center", marginTop: 20 },
	greyText: {
		fontFamily: fonts.primary,
		fontSize: fonts.caption,
		color: colors.white,
		opacity: 0.6,
	},
	greenText: {
		fontFamily: fonts.primary,
		fontSize: fonts.caption,
		color: colors.primary,
	},
});
