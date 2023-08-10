import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthContextProvider/AuthContextProvider';
import ManageClasses from './../pages/Dashboard/AdminDashboard/ManageClasses';
import EnrolledClasses from '../pages/Dashboard/StudentDashboard/EnrolledClasses';
import MyClasses from '../pages/Dashboard/InstructorDashboard/MyClasses';

const RoleBasedRoute = () => {
	// ! Variable definitions
	const { role } = useContext(AuthContext);

	// * Send to the right route
	if (role === 'student') {
		return <EnrolledClasses />;
	} else if (role === 'instructor') {
		return <MyClasses />;
	} else {
		return <ManageClasses />;
	}
};

export default RoleBasedRoute;
