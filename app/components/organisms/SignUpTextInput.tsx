import { StyleSheet, TextInput, View } from "react-native";
import React, { useRef, useState } from "react";
import { colors, fonts } from "@themes";
import { Feather } from "@expo/vector-icons";

type SignUpTextInputProps = {
	name: string;
	email: string;
	password: string;
	setName: (name: string) => void;
	setEmail: (email: string) => void;
	setPassword: (password: string) => void;
};

const SignUpTextInput = ({
	name,
	email,
	password,
	setName,
	setEmail,
	setPassword,
}: SignUpTextInputProps) => {
	const [showPassword, setShowPassword] = useState(false);

	const emailInputRef = useRef<TextInput>(null);
	const passwordInputRef = useRef<TextInput>(null);
	return (
		<>
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
		</>
	);
};

export default SignUpTextInput;

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
});
