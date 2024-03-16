import { StyleSheet, Text, View, Pressable, Alert, Dimensions } from "react-native";
import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { AuthStackParamList } from "@routes/AuthRoute";
import Layout from "@atoms/Layout";
import Header from "@molecules/Header";
import GradientCard from "@molecules/GradientCard";
import MixedText from "@molecules/MixedText";
import GreenButton from "@molecules/GreenButton";
import GoogleSignOnButton from "@molecules/GoogleSignOnButton";
import { colors, fonts } from "@themes";
import { AuthContext, AuthContextType } from "@context/AuthContext";
import { SignInSchema } from "@validation/userValidation";
import SignInTextInput from "@organisms/SignInTextInput";

type SignInScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, "SignIn">;

const height = Dimensions.get("window").height;

const SignInScreen = () => {
	const navigation = useNavigation<SignInScreenNavigationProp>();
	const { toggleAuthentication } = useContext(AuthContext) as AuthContextType;

	// states to store user input
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	//sign in handler
	const handleLogin = async () => {
		//early return if any field is empty
		if (!email || !password) {
			Alert.alert("Please fill all the fields");
			return;
		}

		let signInData = {
			email,
			password,
		};

		//check to see if email is valid
		const isValid = await SignInSchema.isValid(signInData);

		//if not valid, show an alert
		!isValid && Alert.alert("Invalid email or password");

		//if valid, call the toggleAuthentication method
		isValid && toggleAuthentication();
	};

	return (
		<Layout style={styles.layout}>
			<View style={styles.container}>
				<Header text='in' />
				<GradientCard>
					{/* SignInTextInput component */}
					<SignInTextInput
						email={email}
						password={password}
						setEmail={setEmail}
						setPassword={setPassword}
					/>

					<Pressable onPress={() => Alert.alert("Forgot Password?", "Can't do much tbh")}>
						<Text style={styles.forgotPasswordText}>Forgot Password</Text>
					</Pressable>

					<GreenButton title='Login' onPress={handleLogin} />

					<MixedText
						onPress={() => navigation.navigate("SignUp")}
						greyText='New to our platform?'
						greenText='Create an account'
					/>

					<Text style={styles.orText}>or</Text>

					<GoogleSignOnButton onPress={toggleAuthentication} />
				</GradientCard>
			</View>
		</Layout>
	);
};

export default SignInScreen;

const styles = StyleSheet.create({
	layout: { justifyContent: height < 700 ? "center" : undefined },
	container: { marginHorizontal: 20, marginTop: height > 700 ? 0.2 * height : undefined },
	forgotPasswordText: {
		textAlign: "right",
		fontFamily: fonts.primary,
		fontSize: fonts.caption,
		color: colors.primary,
		marginTop: 20,
	},
	orText: {
		marginVertical: 24,
		fontFamily: fonts.primary,
		fontSize: fonts.body,
		alignSelf: "center",
		color: colors.white,
		opacity: 0.6,
	},
});
