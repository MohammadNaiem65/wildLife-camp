import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routers/routes.jsx';
import MetaContextProvider from './Providers/MetaContextProvider/MetaContextProvider';
import AuthContextProvider from './Providers/AuthContextProvider/AuthContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthContextProvider>
			<MetaContextProvider>
				<RouterProvider router={routes} />
			</MetaContextProvider>
		</AuthContextProvider>
	</React.StrictMode>
);
