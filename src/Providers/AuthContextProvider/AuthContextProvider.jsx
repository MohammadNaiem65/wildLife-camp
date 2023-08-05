import { createContext, useEffect, useState } from 'react';
import {
	getAuth,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';
import { app } from '../../firebase/firebase.config';
import Swal from 'sweetalert2';

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
			}
		});
	}, []);

	// * Sign Out user
	const signOutUser = () => {
		setLoading(true);
		signOut(auth)
			.then(() => {
				setLoading(false);
				setUser(null);
				Swal.fire('success', 'Success!', 'Logged Out Successfully!');
			})
			.catch(() => {
				Swal.fire('error', 'Error!', 'Something went wrong!');
			});
	};

	// * Module scaffolding
	const authInfo = {
		user,
		setUser,
		loggedIn,
		setLoggedIn,
		loading,
		setLoading,
		signUpWithEmail,
		signOutUser,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthContextProvider;
