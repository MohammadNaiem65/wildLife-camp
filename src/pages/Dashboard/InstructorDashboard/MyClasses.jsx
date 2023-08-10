import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './../../../Providers/AuthContextProvider/AuthContextProvider';
import MyClass from './MyClass';
import Swal from 'sweetalert2';

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
				.then((data) => setClasses(data))
				.catch(() => {
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: 'Something went wrong!',
					});
				});
		};

		unsubscribe();
	}, []);

	// ! Handle remove a class
	const handleRemoveClass = (id) => {
		Swal.fire({
			title: 'Are you sure?',
			text: 'You want to delete this item?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`http://localhost:5000/classes/class/${id}`, {
					method: 'DELETE',
				})
					.then((response) => response.json())
					.then((data) => {
						if (data.deletedCount > 0) {
							Swal.fire(
								'Successful!',
								'Deleted Successfully!',
								'success'
							);
							const existedClasses = [...myClasses].filter(
								(c) => c._id !== id
							);
							setClasses(existedClasses);
						} else {
							Swal.fire({
								icon: 'error',
								title: 'Oops...',
								text: 'Something went wrong!',
							});
						}
					});
			}
		});
	};

	return (
		<>
			{/* Header */}
			<div className='p-4 text-[#27374D] font-bree rounded bg-[#9BA4B5]'>
				<div className='flex'>
					<span className='flex-1 text-center'>Title</span>
					<span className='flex-1 text-center'>Enrolled</span>
					<span className='flex-1 text-center'>Status</span>
					<span className='flex-1 text-center'>Options</span>
				</div>
			</div>
			{/* Body */}
			{myClasses.length
				? myClasses.map((myClass, index) => (
						<MyClass
							key={myClass._id}
							myClass={myClass}
							order={index + 1}
							handleRemoveClass={handleRemoveClass}
						/>
				  ))
				: <p className='font-bree'>No Data Found</p>}
		</>
	);
};

export default MyClasses;
