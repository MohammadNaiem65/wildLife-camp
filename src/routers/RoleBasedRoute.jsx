import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthContextProvider/AuthContextProvider';
import SelectedClasses from '../pages/Dashboard/StudentDashboard/SelectedClasses';
import AddClass from './../pages/Dashboard/InstructorDashboard/AddClass';
import ManageClasses from './../pages/Dashboard/AdminDashboard/ManageClasses';

const RoleBasedRoute = () => {
	// ! Variable definitions
	const { role } = useContext(AuthContext);

	// * Send to the right route
	if (role === 'student') {
		return <SelectedClasses />;
	} else if (role === 'instructor') {
		return <AddClass />;
	} else {
		return <ManageClasses />;
	}
};

export default RoleBasedRoute;
