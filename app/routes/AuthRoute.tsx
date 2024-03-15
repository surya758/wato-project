import React from "react";
import GetStartedScreen from "../screens/GetStartedScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const AuthRoute = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='GetStarted' component={GetStartedScreen} />
			<Stack.Screen name='SignIn' component={SignInScreen} />
			<Stack.Screen name='SignUp' component={SignUpScreen} />
		</Stack.Navigator>
	);
};

export default AuthRoute;
