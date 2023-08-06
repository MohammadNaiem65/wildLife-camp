import { useContext, useEffect } from 'react';
import Banner from '../Banner/Banner';
import { MetaContext } from '../../../Providers/MetaContextProvider/MetaContextProvider';
import FeatureClasses from '../FeatureClasses/FeatureClasses';
import CTA from '../CTA/CTA';
import FeatureInstructors from '../FeatureInstructors/FeatureInstructors';
import Carousel from '../Carousel/Carousel';
import { AuthContext } from '../../../Providers/AuthContextProvider/AuthContextProvider';

const Home = () => {
	// ! Variable definition
	const { setShowNavbar } = useContext(MetaContext);
	const { setLoading } = useContext(AuthContext);

	useEffect(() => {
		const unsubscribe = () => {
			setLoading(true);
			setShowNavbar(false);
			setLoading(false);
		};
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
