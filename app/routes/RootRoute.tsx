import React, { useState, useEffect, useContext } from "react";
import { ActivityIndicator, View, Text, StyleSheet } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import { NavigationContainer } from "@react-navigation/native";

import AuthRoute from "./AuthRoute";
import HomeRoute from "./HomeRoute";
import { AuthContext, AuthContextType } from "@context/AuthContext";

const RootRoute = () => {
	const [loading, setLoading] = useState(true);
	const [isConnected, setIsConnected] = useState<boolean | null>(false);
	const { authenticated } = useContext(AuthContext) as AuthContextType;

	useEffect(() => {
		NetInfo.fetch().then((state) => {
			setIsConnected(state.isConnected);
			setLoading(false);
		});
	});

	if (loading) {
		return (
			<View style={styles.container}>
				<ActivityIndicator size='large' />
			</View>
		);
	}

	return !isConnected ? (
		<View style={styles.container}>
			<Text>Connect to internet</Text>
		</View>
	) : (
		<NavigationContainer>{authenticated ? <HomeRoute /> : <AuthRoute />}</NavigationContainer>
	);
};

export default RootRoute;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
