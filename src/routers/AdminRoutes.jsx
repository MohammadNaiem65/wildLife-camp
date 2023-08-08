import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthContextProvider/AuthContextProvider';

const AdminRoutes = ({ children }) => {
	// ! Variable definitions
	const { role } = useContext(AuthContext);

	if (role !== 'admin') {
		return;
	} else {
		return { children };
	}
};

export default AdminRoutes;
