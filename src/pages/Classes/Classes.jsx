import { useContext, useEffect } from 'react';
import { MetaContext } from '../../Providers/MetaContextProvider/MetaContextProvider';

const Classes = () => {
	// ! Variable definitions
	const { setShowNavbar } = useContext(MetaContext);

	// Make the navbar visible
	useEffect(() => {
		const unsubscribe = () => setShowNavbar(true);
		return unsubscribe();
	}, []);

	return (
		<div className='container'>
			<h2 className='text-4xl text-center font-candal'>Classes</h2>
		</div>
	);
};

export default Classes;
