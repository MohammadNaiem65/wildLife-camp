import { useContext, useEffect } from 'react';
import { MetaContext } from '../../Providers/MetaContextProvider/MetaContextProvider';

const Dashboard = () => {
	// ! Variable definitions
	const { setShowNavbar } = useContext(MetaContext);

	// Show navbar
	useEffect(() => {
		const unsubscribe = () => setShowNavbar(true);
		return unsubscribe();
	}, []);
    
	return (
		<div className='container'>
			<h1 className=''>Dashboard</h1>
		</div>
	);
};

export default Dashboard;
