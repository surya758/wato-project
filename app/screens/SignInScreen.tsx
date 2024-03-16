import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Pressable,
	Alert,
	useWindowDimensions,
} from "react-native";
import React, { useState, useRef, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";

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

type SignInScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, "SignIn">;

const SignInScreen = () => {
	const navigation = useNavigation<SignInScreenNavigationProp>();
	const { height } = useWindowDimensions();
	const { toggleAuthentication } = useContext(AuthContext) as AuthContextType;

	// refs to move cursor from one input to another
	const emailInputRef = useRef<TextInput>(null);
	const passwordInputRef = useRef<TextInput>(null);

	// states to store user input
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

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
		<Layout style={{ justifyContent: height < 700 ? "center" : undefined }}>
			<View style={{ marginHorizontal: 20, marginTop: height > 700 ? 0.2 * height : undefined }}>
				<Header text='in' />
				<GradientCard>
					<TextInput
						placeholder='Email'
						keyboardType='email-address'
						value={email}
						onChangeText={setEmail}
						style={[styles.textInput, styles.emailInput]}
						autoFocus={true}
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
					<Pressable onPress={() => console.log("forgot password triggered")}>
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
	emailInput: { marginBottom: 20 },
	passwordInput: { marginTop: 0, paddingRight: 50 },
	passwordInputContainer: { justifyContent: "center" },
	eyeIcon: { position: "absolute", right: 16 },
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
