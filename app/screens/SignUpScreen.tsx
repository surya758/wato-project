import { StyleSheet, Text, View, Modal, TextInput, Alert, useWindowDimensions } from "react-native";
import React, { useState, useRef, useContext } from "react";
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
import { colors, fonts } from "@themes";
import MixedText from "@molecules/MixedText";
import { PRIVACY_POLICY } from "@data";
import { AuthContext, AuthContextType } from "@context/AuthContext";
import { SignUpSchema } from "@validation/userValidation";

type SignUpScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, "SignUp">;

const SignUpScreen = () => {
	const navigation = useNavigation<SignUpScreenNavigationProp>();
	const { height } = useWindowDimensions();
	const { toggleAuthentication } = useContext(AuthContext) as AuthContextType;

	// refs to move cursor from one input to another
	const emailInputRef = useRef<TextInput>(null);
	const passwordInputRef = useRef<TextInput>(null);

	// states to store user input
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isChecked, setIsChecked] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [isModalVisible, setIsModalVisible] = useState(false);

	const navigateToSignIn = () => navigation.navigate("SignIn");

	const toggleModal = () => setIsModalVisible(!isModalVisible);

	//sign up handler
	const handleSignUp = async () => {
		//early return if any field is empty or privacy policy is not agreed
		if (!name || !email || !password) {
			Alert.alert("Please fill all the fields");
			return;
		}
		if (!isChecked) {
			Alert.alert("Please agree to the privacy policy");
			return;
		}

		let signUpData = {
			name,
			email,
			password,
		};

		//check to see if data is valid
		const isValid = await SignUpSchema.isValid(signUpData);

		//if not valid, show an alert
		!isValid && Alert.alert("Invalid email or password");

		//if valid, call the toggleAuthentication method
		isValid && toggleAuthentication();
	};

	return (
		<Layout style={{ justifyContent: height < 700 ? "center" : undefined }}>
			<View style={{ marginHorizontal: 20, marginTop: height > 700 ? 0.2 * height : undefined }}>
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
						<MixedText
							onPress={toggleModal}
							greyText='I agree'
							greenText='to privacy policy & terms'
							style={styles.mixedText}
						/>
					</View>

					<GreenButton title='Sign Up' onPress={handleSignUp} />

					<MixedText
						onPress={navigateToSignIn}
						greyText='Already have an account?'
						greenText='Sign in instead'
					/>

					<Text style={styles.orText}>or</Text>

					<GoogleSignOnButton onPress={toggleAuthentication} />
				</GradientCard>
			</View>

			<Modal
				visible={isModalVisible}
				presentationStyle='formSheet'
				animationType='slide'
				onRequestClose={toggleModal}
			>
				<View style={styles.modalStyle}>
					<Text style={styles.modalText}>{PRIVACY_POLICY}</Text>
					<GreenButton title='Close' onPress={toggleModal} style={styles.modalButton} />
				</View>
			</Modal>
		</Layout>
	);
};

export default SignUpScreen;

const styles = StyleSheet.create({
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
	mixedText: { marginTop: 0 },
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
	modalStyle: { flex: 1, padding: 20, backgroundColor: colors.backgroundColor },
	modalText: { fontFamily: fonts.primary, fontSize: fonts.caption, color: colors.white },
	modalButton: { marginTop: 0 },
});
