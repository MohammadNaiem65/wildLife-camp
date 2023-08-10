import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthContextProvider/AuthContextProvider';
import leftRays from '../../../assets/rays-l.png';
import rightRays from '../../../assets/rays-r.png';
import EnrolledClass from './EnrolledClass';

const EnrolledClasses = () => {
	// ! Variable definitions
	const { user } = useContext(AuthContext);
	const [enrolledClasses, setEnrolledClasses] = useState([]);

	// ! Get selected classes
	useEffect(() => {
		fetch(
			`http://localhost:5000/student/classes/enrolled?email=${user.email}`
		)
			.then((res) => res.json())
			.then((data) => setEnrolledClasses(data));
	}, []);

	return (
		<>
			{/* Title */}
			<div className='w-fit mx-auto mt-24 relative'>
				<img
					className='w-10 absolute -top-7 -left-12'
					src={leftRays}
					alt=''
				/>
				<h1 className='text-2xl font-bree font-semibold'>
					Enrolled Classes
				</h1>
				<img
					className='w-10 absolute -top-7 -right-12'
					src={rightRays}
					alt=''
				/>
			</div>

			{/* Classes */}
			<div className='mt-10 grid grid-cols-2 gap-5'>
				{enrolledClasses.length
					? enrolledClasses.map((c) => (
							<EnrolledClass key={c._id} c={c} />
					  ))
					: enrolledClasses.message}
			</div>
		</>
	);
};

export default EnrolledClasses;
