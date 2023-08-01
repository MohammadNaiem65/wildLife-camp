import { useContext, useEffect } from 'react';
import Banner from '../Banner/Banner';
import { MetaContext } from '../../../Providers/MetaContextProvider/MetaContextProvider';
import FeatureClasses from '../FeatureClasses/FeatureClasses';
import CTA from '../CTA/CTA';

const Home = () => {
	const { setShowNavbar } = useContext(MetaContext);
	useEffect(() => {
		setShowNavbar(false);
	}, []);
	return (
		<div className='relative'>
			<Banner />
			<FeatureClasses />
			<CTA />
		</div>
	);
};

export default Home;
