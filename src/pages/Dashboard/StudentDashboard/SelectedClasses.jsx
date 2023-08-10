import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthContextProvider/AuthContextProvider';
import SelectedClass from './SelectedClass';

const SelectedClasses = () => {
	// ! Required variables
	const { user } = useContext(AuthContext);
	const [selectedClasses, setSelectedClasses] = useState([]);

	// ! Get selected classes
	useEffect(() => {
		fetch(
			`https://wild-life-camp-server.vercel.app/student/classes/selected?email=${user.email}`
		)
			.then((res) => res.json())
			.then((data) => setSelectedClasses(data));
	}, []);

	// ! Update selected classes
	const updateSelectedClasses = (id) => {
		const restClasses = selectedClasses.filter((c) => c._id !== id);
		setSelectedClasses(restClasses);
	};

	return (
		<div className='font-bree text-[#27374D]'>
			{/* Header */}
			<div className='p-4 bg-[#9BA4B5] font-bree flex rounded'>
				<span className='flex-[2] text-center'>Title</span>
				<span className='flex-1 text-center'>Seats</span>
				<span className='flex-1 text-center'>Price</span>
				<span className='flex-1 text-center'>Options</span>
			</div>
			{/* Body */}
			<>
				{selectedClasses.length
					? selectedClasses.map((aClass) => (
							<SelectedClass
								key={aClass._id}
								aClass={aClass}
								updateSelectedClasses={updateSelectedClasses}
							/>
					  ))
					: selectedClasses.message}
			</>
		</div>
	);
};

export default SelectedClasses;
