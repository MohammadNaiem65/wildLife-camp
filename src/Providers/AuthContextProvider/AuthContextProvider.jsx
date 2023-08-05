import { createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../firebase/firebase.config';

// ! Context
export const AuthContext = createContext({});
const auth = getAuth(app);

const AuthContextProvider = ({ children }) => {
	// ! States definition
	const [user, setUser] = useState(null);
	const [loggedIn, setLoggedIn] = useState(false);

	// * Sign Up user
	const signUpWithEmail = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// * Module scaffolding
	const authInfo = { user, setUser, loggedIn, setLoggedIn, signUpWithEmail };

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthContextProvider;
