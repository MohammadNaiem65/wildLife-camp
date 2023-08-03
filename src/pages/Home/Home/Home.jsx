import { useContext, useEffect } from 'react';
import Banner from '../Banner/Banner';
import { MetaContext } from '../../../Providers/MetaContextProvider/MetaContextProvider';
import FeatureClasses from '../FeatureClasses/FeatureClasses';
import CTA from '../CTA/CTA';
import FeatureInstructors from '../FeatureInstructors/FeatureInstructors';
import Carousel from '../Carousel/Carousel';

const Home = () => {
	const { setShowNavbar } = useContext(MetaContext);
	useEffect(() => {
		const unsubscribe = () => setShowNavbar(false);
		return unsubscribe();
	}, []);
	return (
		<div className='relative'>
			<Banner />
			<Carousel />
			<FeatureClasses />
			<CTA />
			<FeatureInstructors />
		</div>
	);
};

export default Home;
