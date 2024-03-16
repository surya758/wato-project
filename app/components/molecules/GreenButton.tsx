import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";

import { colors, fonts } from "@themes";

type GreenButtonProps = {
	title: string;
	onPress: () => void;
};

const GreenButton = ({ title, onPress }: GreenButtonProps) => {
	return (
		<Pressable
			style={{
				width: "100%",
				backgroundColor: colors.primary,
				borderRadius: 4,
				alignItems: "center",
				marginTop: 40,
			}}
			onPress={onPress}
		>
			<Text style={{ paddingVertical: 8, fontFamily: fonts.primary, fontSize: fonts.body }}>
				{title}
			</Text>
		</Pressable>
	);
};

export default GreenButton;

const styles = StyleSheet.create({});
