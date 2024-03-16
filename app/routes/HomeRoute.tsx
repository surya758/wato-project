import { StyleSheet, Text } from "react-native";
import React, { useContext } from "react";

import Layout from "@atoms/Layout";
import GreenButton from "@molecules/GreenButton";
import { AuthContext, AuthContextType } from "@context/AuthContext";
import { fonts, colors } from "@themes";

const HomeRoute = () => {
	const { toggleAuthentication } = useContext(AuthContext) as AuthContextType;
	return (
		<Layout style={styles.layout}>
			<Text style={styles.title}>Autheticated</Text>
			<GreenButton title='Log out' onPress={toggleAuthentication} style={styles.button} />
		</Layout>
	);
};

export default HomeRoute;

const styles = StyleSheet.create({
	layout: { justifyContent: "center", alignItems: "center" },
	title: { color: colors.white, fontFamily: fonts.heading2, fontSize: fonts.h2 },
	button: { width: "80%" },
});
