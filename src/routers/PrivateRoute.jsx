import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthContextProvider/AuthContextProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
	// ! Variable definitions
	const { loading, loggedIn } = useContext(AuthContext);
	const location = useLocation();

	// * Validate conditions
	if (loading) {
		return;
	} else if (loggedIn) {
		return children;
	} else {
		return <Navigate to={'/login'} state={{ from: location }} replace />;
	}
};

export default PrivateRoute;
