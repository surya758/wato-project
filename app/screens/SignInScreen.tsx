import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { AuthStackParamList } from "@routes/AuthRoute";

type SignInScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, "SignIn">;

const SignInScreen = () => {
	const navigation = useNavigation<SignInScreenNavigationProp>();
	return (
		<View>
			<Text>SignInScreen</Text>
		</View>
	);
};

export default SignInScreen;

const styles = StyleSheet.create({});
