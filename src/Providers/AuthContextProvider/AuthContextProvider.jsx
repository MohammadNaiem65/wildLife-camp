import { createContext, useEffect, useState } from 'react';
import {
	getAuth,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
} from 'firebase/auth';
import { app } from '../../firebase/firebase.config';

// ! Context
export const AuthContext = createContext({});
const auth = getAuth(app);

const AuthContextProvider = ({ children }) => {
	// ! States definition
	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState(null);
	const [loggedIn, setLoggedIn] = useState(false);

	// * Sign Up user
	const signUpWithEmail = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// ! Get user
	useEffect(() => {
		setLoading(true);
		onAuthStateChanged(auth, (newUser) => {
			if (newUser) {
				setUser(newUser);
				setLoggedIn(true);
				setLoading(false);
				console.log(newUser);
			}
		});
	}, []);

	// * Module scaffolding
	const authInfo = {
		user,
		setUser,
		loggedIn,
		setLoggedIn,
		loading,
		setLoading,
		signUpWithEmail,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthContextProvider;
