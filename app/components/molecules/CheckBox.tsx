import { StyleSheet, Pressable, ViewProps } from "react-native";
import { Image } from "expo-image";
import React from "react";
import { colors, images } from "@themes";

type CheckBoxProps = {
	isChecked: boolean;
	setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
};

const CheckBox = ({ isChecked, setIsChecked }: ViewProps & CheckBoxProps) => {
	return (
		<Pressable
			style={[
				styles.container,
				{
					backgroundColor: isChecked ? colors.primary : undefined,
					borderColor: isChecked ? colors.primary : colors.white,
				},
			]}
			onPress={() => setIsChecked((prev) => !prev)}
		>
			{isChecked && <Image source={images.tick} style={styles.tick} resizeMode='contain' />}
		</Pressable>
	);
};

export default CheckBox;

const styles = StyleSheet.create({
	container: {
		height: 24,
		width: 24,
		borderRadius: 4,
		borderWidth: 1,
		opacity: 0.7,
		justifyContent: "center",
		alignItems: "center",
		marginRight: 7,
	},
	tick: { height: 12, width: 12 },
});
