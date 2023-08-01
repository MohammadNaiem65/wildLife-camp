import { useContext, useEffect } from 'react';
import Banner from '../Banner/Banner';
import { MetaContext } from '../../../Providers/MetaContextProvider/MetaContextProvider';
import FeatureClasses from '../FeatureClasses/FeatureClasses';

const Home = () => {
	const { setShowNavbar } = useContext(MetaContext);
	useEffect(() => {
		setShowNavbar(false);
	}, []);
	return (
		<div className='relative'>
			<Banner />
			<FeatureClasses />
		</div>
	);
};

export default Home;
