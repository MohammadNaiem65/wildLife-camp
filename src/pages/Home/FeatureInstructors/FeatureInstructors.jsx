import { useContext, useEffect, useState } from 'react';
import leftRays from '../../../assets/rays-l.png';
import rightRays from '../../../assets/rays-r.png';
import Instructor from '../../Shared/Instructor/Instructor';
import { AuthContext } from '../../../Providers/AuthContextProvider/AuthContextProvider';

const FeatureInstructors = () => {
	// ! Variable definitions
	const { setLoading } = useContext(AuthContext);
	const [instructors, setInstructors] = useState([]);

	useEffect(() => {
		const unsubscribe = () => {
			setLoading(true);
			fetch('http://localhost:5000/users/instructors/6')
				.then((res) => res.json())
				.then((data) => {
					setLoading(false);
					setInstructors(data);
				});
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
					<Instructor
						key={instructor._id}
						name={instructor.name}
						img={instructor.img}
					/>
				))}
			</div>
		</div>
	);
};

export default FeatureInstructors;
