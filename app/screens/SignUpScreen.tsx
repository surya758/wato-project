import { StyleSheet, Text, View, Modal, Alert, Dimensions } from "react-native";
import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

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
import SignUpTextInput from "@organisms/SignUpTextInput";

type SignUpScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, "SignUp">;

const height = Dimensions.get("window").height;

const SignUpScreen = () => {
	const navigation = useNavigation<SignUpScreenNavigationProp>();
	const { toggleAuthentication } = useContext(AuthContext) as AuthContextType;

	// states to store user input
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isChecked, setIsChecked] = useState(false);
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
			isChecked,
		};

		//check to see if data is valid
		const isValid = await SignUpSchema.isValid(signUpData);

		//if not valid, show an alert
		!isValid && Alert.alert("Invalid email or password");

		//if valid, call the toggleAuthentication method
		isValid && toggleAuthentication();
	};

	return (
		<Layout style={styles.layout}>
			<View style={styles.container}>
				<Header text='up' />

				<GradientCard>
					<SignUpTextInput
						name={name}
						email={email}
						password={password}
						setEmail={setEmail}
						setName={setName}
						setPassword={setPassword}
					/>

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
	layout: { justifyContent: height < 700 ? "center" : undefined },
	container: { marginHorizontal: 20, marginTop: height > 700 ? 0.2 * height : undefined },
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
	modalStyle: { flex: 1, padding: 20, backgroundColor: colors.backgroundColor },
	modalText: { fontFamily: fonts.primary, fontSize: fonts.caption, color: colors.white },
	modalButton: { marginTop: 0 },
});
