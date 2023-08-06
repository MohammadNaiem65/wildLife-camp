import { useEffect, useState } from 'react';
import leftRays from '../../../assets/rays-l.png';
import rightRays from '../../../assets/rays-r.png';
import Instructor from '../Instructor/Instructor';

const FeatureInstructors = () => {
	const [instructors, setInstructors] = useState([]);

	useEffect(() => {
		const unsubscribe = () => {
			fetch('http://localhost:5000/instructors/6')
				.then((res) => res.json())
				.then((data) => setInstructors(data));
		};
		return unsubscribe();
	}, []);

	return (
		<div className='container flex flex-col justify-between items-center'>
			{/* Title */}
			<div className='relative'>
				<img
					className='absolute -top-7 -left-12'
					src={leftRays}
					alt=''
				/>
				<h1 className='title-lg'>Top Instructors</h1>
				<img
					className='absolute -top-7 -right-12'
					src={rightRays}
					alt=''
				/>
			</div>

			{/* Instructor List*/}
			<div className='mt-10 grid grid-cols-3 gap-5'>
				{instructors.map((instructor) => (
					<Instructor key={instructor._id} instructor={instructor} />
				))}
			</div>
		</div>
	);
};

export default FeatureInstructors;
