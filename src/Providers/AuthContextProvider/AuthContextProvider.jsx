import { createContext, useState } from 'react';

export const AuthContext = createContext({});
const AuthContextProvider = ({ children }) => {
	// ! States definition
	const [user, setUser] = useState(null);
	const [loggedIn, setLoggedIn] = useState(false);

	// * Module scaffolding
	const authInfo = { user, setUser, loggedIn, setLoggedIn };

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthContextProvider;
