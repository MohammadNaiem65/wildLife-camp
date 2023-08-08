import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './../../../Providers/AuthContextProvider/AuthContextProvider';
import MyClass from './MyClass';

const MyClasses = () => {
	// ! Variable definitions
	const { user } = useContext(AuthContext);
	const [myClasses, setClasses] = useState([]);

	// ! Get the classes
	useEffect(() => {
		const unsubscribe = () => {
			fetch(
				`http://localhost:5000/instructor/classes?email=${user.email}`
			)
				.then((res) => res.json())
				.then((data) => setClasses(data));
		};

		unsubscribe();
	}, []);

	// ! Handle remove a class
	const handleRemoveClass = (id) => {
		
	};

	return (
		<>
			<div className='p-4 text-[#27374D] font-bree rounded bg-[#9BA4B5]'>
				<div className='flex'>
					<span className='flex-1 text-center'>Title</span>
					<span className='flex-1 text-center'>Enrolled</span>
					<span className='flex-1 text-center'>Status</span>
					<span className='flex-1 text-center'>Options</span>
				</div>
			</div>
			{myClasses.map((myClass, index) => (
				<MyClass
					key={myClass._id}
					myClass={myClass}
					order={index + 1}
					handleRemoveClass={handleRemoveClass}
				/>
			))}
		</>
	);
};

export default MyClasses;
