import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthContextProvider/AuthContextProvider';

const StudentRoutes = ({ children }) => {
	// ! Variable definitions
	const { role } = useContext(AuthContext);

	if (role !== 'student') {
		return;
	} else {
		return children;
	}
};

export default StudentRoutes;
