import { useContext, useEffect } from 'react';
import { MetaContext } from '../../Providers/MetaContextProvider/MetaContextProvider';
import { AuthContext } from '../../Providers/AuthContextProvider/AuthContextProvider';

const Dashboard = () => {
	// ! Variable definitions
	const { setShowNavbar } = useContext(MetaContext);
	const { role } = useContext(AuthContext);

	// Show navbar
	useEffect(() => {
		const unsubscribe = () => setShowNavbar(true);
		return unsubscribe();
	}, []);

	return (
		<div className='container'>
			<h1 className=''>Role: {role}</h1>
		</div>
	);
};

export default Dashboard;
