import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, Text, StyleSheet } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import AuthRoute from "./AuthRoute";

const RootRoute = () => {
	const [loading, setLoading] = useState(true);
	const [isConnected, setIsConnected] = useState<boolean | null>(false);

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
		<AuthRoute />
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
