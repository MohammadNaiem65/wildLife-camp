import { useState } from 'react';
import bgImg from '../../../assets/category-div-bg.jpg';
import { useEffect } from 'react';
import AClass from '../AClass/AClass';

const FeatureClasses = () => {
	const [classes, setClasses] = useState([]);

	// fetch users
	useEffect(() => {
		fetch('classes.json')
			.then((res) => res.json())
			.then((data) => setClasses(data));
	}, []);
	return (
		<div className='my-16 relative'>
			<img
				className='w-full h-[112%] absolute -top-12 -z-10'
				src={bgImg}
				alt='background image'
			/>
			{/* Title */}
			<h2 className='title'>Top Classes</h2>
			{/* Classes */}
			<div className='w-4/5 mx-auto mt-10 grid grid-cols-3 gap-5'>
				{classes.slice(0, 6).map((aClass) => (
					<AClass key={aClass.id} c={aClass} />
				))}
			</div>
		</div>
	);
};

export default FeatureClasses;
