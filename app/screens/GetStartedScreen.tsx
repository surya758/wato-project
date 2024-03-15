import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import { AuthStackParamList } from "@routes/AuthRoute";

type GetStartedScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, "GetStarted">;

const GetStartedScreen = () => {
	const navigation = useNavigation<GetStartedScreenNavigationProp>();
	return (
		<View>
			<Text>GetStartedScreen</Text>
		</View>
	);
};

export default GetStartedScreen;

const styles = StyleSheet.create({});
