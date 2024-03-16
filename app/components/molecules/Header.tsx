import { StyleSheet, Text, TextStyle } from "react-native";
import React from "react";
import { fonts, colors } from "@themes";

type HeaderProps = {
	style?: TextStyle | TextStyle[];
	text: "in" | "up";
};

const Header = ({ style, text }: HeaderProps) => {
	return <Text style={[styles.headerText, style]}>Please sign-{text} to your account</Text>;
};

export default Header;

const styles = StyleSheet.create({
	headerText: {
		fontFamily: fonts.heading2,
		fontSize: fonts.title,
		color: colors.white,
	},
});
