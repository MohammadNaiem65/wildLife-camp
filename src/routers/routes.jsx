import { createBrowserRouter } from 'react-router-dom';
import App from './../App';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import Classes from '../pages/Classes/Classes';
import Instructors from '../pages/Instructors/Instructors';
import Dashboard from '../pages/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './PrivateRoute';
import Error from '../pages/Error/Error';
import RoleBasedRoute from './RoleBasedRoute';
import SelectedClasses from '../pages/Dashboard/StudentDashboard/SelectedClasses';
import EnrolledClasses from './../pages/Dashboard/StudentDashboard/EnrolledClasses';
import AddClass from '../pages/Dashboard/InstructorDashboard/AddClass';
import MyClasses from './../pages/Dashboard/InstructorDashboard/MyClasses';
import ManageClasses from '../pages/Dashboard/AdminDashboard/ManageClasses';
import ManageUsers from './../pages/Dashboard/AdminDashboard/ManageUsers';
import StudentRoutes from './StudentRoutes';
import InstructorRoutes from './InstructorRoutes';
import AdminRoutes from './AdminRoutes';

export const routes = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/classes',
				element: <Classes />,
			},
			{
				path: '/instructors',
				element: <Instructors />,
			},
			{
				path: '/dashboard',
				element: (
					<PrivateRoute>
						<Dashboard />
					</PrivateRoute>
				),
				children: [
					{
						path: '/dashboard',
						element: <RoleBasedRoute />,
					},
					{
						path: '/dashboard/student/selected-classes',
						element: (
							<StudentRoutes>
								<SelectedClasses />
							</StudentRoutes>
						),
					},
					{
						path: '/dashboard/student/enrolled-classes',
						element: (
							<StudentRoutes>
								<EnrolledClasses />
							</StudentRoutes>
						),
					},
					{
						path: '/dashboard/instructor/add-class',
						element: (
							<InstructorRoutes>
								<AddClass />
							</InstructorRoutes>
						),
					},
					{
						path: '/dashboard/instructor/my-classes',
						element: (
							<InstructorRoutes>
								<MyClasses />
							</InstructorRoutes>
						),
					},
					{
						path: '/dashboard/admin/manage-classes',
						element: (
							<AdminRoutes>
								<ManageClasses />
							</AdminRoutes>
						),
					},
					{
						path: '/dashboard/admin/manage-users',
						element: (
							<AdminRoutes>
								<ManageUsers />
							</AdminRoutes>
						),
					},
				],
			},
			{
				path: '/sign-up',
				element: <SignUp />,
			},
			{
				path: '/login',
				element: <Login />,
			},
		],
	},
]);
