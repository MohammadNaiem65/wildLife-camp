import { createBrowserRouter } from 'react-router-dom';
import App from './../App';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import Classes from '../pages/Classes/Classes';
import Instructors from '../pages/Instructors/Instructors';
import Dashboard from '../pages/Dashboard/Dashboard';
import PrivateRoute from './PrivateRoute';
import Error from '../pages/Error/Error';

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
