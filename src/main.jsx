import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routers/routes.jsx';
import MetaContextProvider from './Providers/MetaContextProvider/MetaContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<MetaContextProvider>
			<RouterProvider router={routes} />
		</MetaContextProvider>
	</React.StrictMode>
);
