import { createBrowserRouter } from 'react-router-dom';
import App from './../App';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';

export const routes = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			// { path: '/classes' },
			// {
			// 	path: '/classes/class/:id',
			// },
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/sign-up',
				element: <SignUp />,
			},
		],
	},
]);
