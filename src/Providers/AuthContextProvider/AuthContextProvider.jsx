import { createContext, useEffect, useState } from 'react';
import {
	getAuth,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { app } from '../../firebase/firebase.config';
import Swal from 'sweetalert2';

// ! Context
export const AuthContext = createContext({});
const auth = getAuth(app);

const AuthContextProvider = ({ children }) => {
	// ! States definition
	const [loading, setLoading] = useState(true);
	const [loggedIn, setLoggedIn] = useState(false);
	const [user, setUser] = useState(null);
	const [role, setRole] = useState('student');

	// * Sign Up user
	const signUpWithEmail = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// ! Manage user
	useEffect(() => {
		setLoading(true);
		setLoggedIn(false);
		onAuthStateChanged(auth, (existedUser) => {
			if (existedUser) {
				fetch(
					`http://localhost:5000/users/role?email=${existedUser.email}`
				)
					.then((res) => res.json())
					.then((data) => {
						setUser(existedUser);
						setRole(data.role);
						setLoggedIn(true);
						setLoading(false);
					});
			} else {
				setUser(null);
				setLoggedIn(false);
				setLoading(false);
			}
		});
	}, []);

	// ! Sign in user
	const signInWithEmail = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	// * Sign Out user
	const signOutUser = () => {
		setLoading(true);
		signOut(auth)
			.then(() => {
				setLoading(false);
				setLoggedIn(false);
				setUser(null);
				Swal.fire({
					icon: 'success',
					title: 'Success!',
					text: 'Logged out Successfully',
				});
			})
			.catch(() => {
				Swal.fire('error', 'Error!', 'Something went wrong!');
			});
	};

	// * Module scaffolding
	const authInfo = {
		user,
		setUser,
		role,
		setRole,
		loggedIn,
		setLoggedIn,
		loading,
		setLoading,
		signUpWithEmail,
		signInWithEmail,
		signOutUser,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthContextProvider;
