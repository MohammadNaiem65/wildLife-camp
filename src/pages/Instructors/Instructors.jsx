import { useContext, useEffect } from 'react';
import { MetaContext } from '../../Providers/MetaContextProvider/MetaContextProvider';

const Instructors = () => {
	// ! Variable definitions
	const { setShowNavbar } = useContext(MetaContext);

	// Make the navbar visible
	useEffect(() => {
		const unsubscribe = () => setShowNavbar(true);
		return unsubscribe();
	}, []);

	return (
		<div className='container'>
			<h1 className='text-center'>Instructor</h1>
		</div>
	);
};

export default Instructors;
