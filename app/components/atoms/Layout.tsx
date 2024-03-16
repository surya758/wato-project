import { StyleSheet, View, ViewStyle, TouchableWithoutFeedback, Keyboard } from "react-native";
import React, { PropsWithChildren } from "react";
import { StatusBar } from "expo-status-bar";
import { colors } from "@themes";

type LayoutProps = {
	barStyle?: "light" | "dark";
	hidden?: boolean;
	style?: ViewStyle | ViewStyle[];
};

const Layout = ({ barStyle, hidden, style, children }: PropsWithChildren<LayoutProps>) => {
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={[styles.outerContainer, style]}>
				{children}
				<StatusBar style={barStyle} hidden={hidden ?? true} />
			</View>
		</TouchableWithoutFeedback>
	);
};

export default Layout;

const styles = StyleSheet.create({
	outerContainer: {
		flex: 1,
		backgroundColor: colors.backgroundColor,
	},
});
