import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import React, { useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";

import { AuthStackParamList } from "@routes/AuthRoute";
import Layout from "@atoms/Layout";
import Header from "@molecules/Header";
import GradientCard from "@molecules/GradientCard";
import CheckBox from "@molecules/CheckBox";
import GreenButton from "@molecules/GreenButton";
import GoogleSignOnButton from "@molecules/GoogleSignOnButton";
import { colors, fonts, images } from "@themes";
import MixedText from "@molecules/MixedText";

type SignUpScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, "SignUp">;

const SignUpScreen = () => {
	const navigation = useNavigation<SignUpScreenNavigationProp>();

	const emailInputRef = useRef<TextInput>(null);
	const passwordInputRef = useRef<TextInput>(null);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isChecked, setIsChecked] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	const navigateToSignIn = () => {
		navigation.navigate("SignIn");
	};

	const handleSignUp = () => {
		console.log("sign up successful");
	};

	return (
		<Layout style={styles.layout}>
			<View style={styles.container}>
				<Header text='up' />

				<GradientCard>
					<TextInput
						placeholder='Name'
						value={name}
						onChangeText={setName}
						autoCorrect={true}
						style={styles.textInput}
						autoFocus={true}
						returnKeyType='next'
						onSubmitEditing={() => emailInputRef.current?.focus()}
						autoCapitalize='none'
						autoComplete='off'
						placeholderTextColor={colors.white}
						blurOnSubmit={false}
					/>
					<TextInput
						placeholder='Email'
						keyboardType='email-address'
						value={email}
						onChangeText={setEmail}
						style={[styles.textInput, styles.emailInput]}
						returnKeyType='next'
						ref={emailInputRef}
						onSubmitEditing={() => passwordInputRef.current?.focus()}
						autoCapitalize='none'
						autoComplete='off'
						placeholderTextColor={colors.white}
						blurOnSubmit={false}
					/>
					<View style={styles.passwordInputContainer}>
						<TextInput
							placeholder='Password'
							secureTextEntry={!showPassword}
							value={password}
							onChangeText={setPassword}
							style={[styles.textInput, styles.passwordInput]}
							returnKeyType='done'
							ref={passwordInputRef}
							autoCapitalize='none'
							autoComplete='off'
							placeholderTextColor={colors.white}
						/>
						<View style={styles.eyeIcon}>
							<Feather
								name={showPassword ? "eye" : "eye-off"}
								size={24}
								color='white'
								onPress={() => setShowPassword(!showPassword)}
							/>
						</View>
					</View>

					<View style={styles.checkBoxContainer}>
						<CheckBox isChecked={isChecked} setIsChecked={setIsChecked} />
						<Text style={[styles.policyText, { color: colors.white }]}>I agree </Text>
						<Pressable>
							<Text style={[styles.policyText, { color: colors.primary }]}>
								to privacy policy & terms
							</Text>
						</Pressable>
					</View>

					<GreenButton title='Sign Up' onPress={handleSignUp} />

					<MixedText
						onPress={navigateToSignIn}
						greyText='Already have an account?'
						greenText='Sign in instead'
					/>

					<Text style={styles.orText}>or</Text>

					<GoogleSignOnButton onPress={() => console.log("google sign in")} />
				</GradientCard>
			</View>
		</Layout>
	);
};

export default SignUpScreen;

const styles = StyleSheet.create({
	layout: { justifyContent: "center" },
	container: { marginHorizontal: 20 },
	emailInput: { marginBottom: 20 },
	passwordInput: { marginTop: 0, paddingRight: 50 },
	passwordInputContainer: { justifyContent: "center" },
	eyeIcon: { position: "absolute", right: 16 },
	checkBoxContainer: { flexDirection: "row", alignItems: "center", marginTop: 20 },
	policyText: {
		fontFamily: fonts.primary,
		fontSize: fonts.caption,
	},
	alreadyTextContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
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
	textInput: {
		paddingHorizontal: 16,
		paddingVertical: 12,
		borderWidth: 1,
		borderColor: colors.white,
		borderRadius: 10,
		opacity: 0.7,
		color: colors.white,
		marginTop: 20,
		fontFamily: fonts.primary,
	},
});
