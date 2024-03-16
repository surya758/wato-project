import React, { createContext, PropsWithChildren, useState } from "react";

export type AuthContextType = {
	authenticated: boolean;
	toggleAuthentication: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: PropsWithChildren) => {
	const [authenticated, setAuthenticated] = useState(false);
	const toggleAuthentication = () => {
		setAuthenticated(!authenticated);
	};
	return (
		<AuthContext.Provider value={{ authenticated, toggleAuthentication }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
