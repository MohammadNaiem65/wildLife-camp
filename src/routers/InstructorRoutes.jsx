import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthContextProvider/AuthContextProvider';

const InstructorRoutes = ({ children }) => {
	// ! Variable definitions
	const { role } = useContext(AuthContext);

	if (role !== 'instructor') {
		return;
	} else {
		return { children };
	}
};

export default InstructorRoutes;
