import { useContext, useEffect, useState } from 'react';
import leftRays from '../../assets/rays-l.png';
import rightRays from '../../assets/rays-r.png';
import { MetaContext } from '../../Providers/MetaContextProvider/MetaContextProvider';
import AClass from './../Shared/AClass/AClass';

const Classes = () => {
	// ! Variable definitions
	const { setShowNavbar } = useContext(MetaContext);
	const [classes, setClasses] = useState([]);

	// Make the navbar visible
	useEffect(() => {
		const unsubscribe = () => {
			setShowNavbar(true);
			fetch('http://localhost:5000/classes')
				.then((res) => res.json())
				.then((data) => setClasses(data));
		};
		return unsubscribe();
	}, []);

	return (
		<div className='container'>
			{/* Title */}
			<div className='w-fit mx-auto relative'>
				<img
					className='absolute -top-7 -left-12'
					src={leftRays}
					alt=''
				/>
				<h1 className='title-lg'>Instructors</h1>
				<img
					className='absolute -top-7 -right-12'
					src={rightRays}
					alt=''
				/>
			</div>

			{/* Classes */}
			<div className='mx-auto mt-10 grid grid-cols-3 gap-5'>
				{classes.map((aClass) => (
					<AClass key={aClass._id} c={aClass} />
				))}
			</div>
		</div>
	);
};

export default Classes;
