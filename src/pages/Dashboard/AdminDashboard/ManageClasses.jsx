import { useEffect } from 'react';
import { useState } from 'react';
import ManageClass from './ManageClass';

const ManageClasses = () => {
	// ! Variable definitions
	const [classes, setClasses] = useState([]);
	const [refresh, setRefresh] = useState(false);

	// Get the classes
	useEffect(() => {
		fetch('http://localhost:5000/classes/all')
			.then((res) => res.json())
			.then((data) => setClasses(data));
	}, [refresh]);

	return (
		<div>
			<div className='p-4 bg-[#9BA4B5] text-[#27374D] font-bree rounded'>
				<div className='flex'>
					<span className='flex-[2] text-center'>Class Details</span>
					<span className='flex-1 text-center'>Instructor</span>
					<span className='flex-1 ml-14 text-center'>Options</span>
				</div>
			</div>
			<>
				{classes?.map((c) => (
					<ManageClass
						key={c._id}
						c={c}
						refresh={refresh}
						setRefresh={setRefresh}
					/>
				))}
			</>
		</div>
	);
};

export default ManageClasses;
