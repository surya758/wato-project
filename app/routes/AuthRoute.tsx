import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import GetStartedScreen from "@screens/GetStartedScreen";
import SignInScreen from "@screens/SignInScreen";
import SignUpScreen from "@screens/SignUpScreen";

export type AuthStackParamList = {
	GetStarted: undefined;
	SignIn: undefined;
	SignUp: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

const AuthRoute = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name='GetStarted' component={GetStartedScreen} />
			<Stack.Screen name='SignIn' component={SignInScreen} />
			<Stack.Screen name='SignUp' component={SignUpScreen} />
		</Stack.Navigator>
	);
};

export default AuthRoute;
