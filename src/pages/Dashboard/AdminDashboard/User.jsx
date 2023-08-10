import Swal from 'sweetalert2';

const User = ({ user, refresh, setRefresh }) => {
	// ! Variable definitions
	const { _id, img, name, email, role } = user;

	// Handle update role
	const handleUpdateRole = (e) => {
		// Get role
		let newRole;
		if (e.target.innerText === 'Student') {
			newRole = 'student';
		} else if (e.target.innerText === 'Instructor') {
			newRole = 'instructor';
		} else {
			newRole = 'admin';
		}

		// ! Update role
		fetch(
			`https://wild-life-camp-server.vercel.app/admin/user/role/${_id}?role=${newRole}`,
			{
				method: 'PATCH',
			}
		)
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0 || data.deletedCount > 0) {
					Swal.fire({
						icon: 'success',
						title: 'Successful',
					});
					setRefresh(!refresh);
				} else {
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: 'Something went wrong!',
					});
				}
			})
			.catch(() => {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Something went wrong!',
				});
			});
	};

	return (
		<div className='p-5 font-bree flex items-center rounded odd:bg-[#9BA4B5]'>
			{/* User details */}
			<div className='flex-1 flex items-center'>
				<img
					className='w-20 aspect-square rounded-full object-cover'
					src={img}
					alt=''
				/>
				<div className='ml-3'>
					<h3 className='text-2xl'>{name}</h3>
					<p>Email: {email}</p>
				</div>
			</div>
			{/* Role */}
			<p className='flex-1 text-center first-letter:uppercase'>{role}</p>
			{/* Set role */}
			<div className='flex-1 text-slate-800 flex'>
				<button
					className='w-28 block mx-auto px-5 py-2 text-white rounded-full bg-green-500 duration-300 hover:-translate-y-2 disabled:bg-green-800 disabled:translate-y-0'
					onClick={handleUpdateRole}
					disabled={
						role === 'student' || role === 'admin' ? true : false
					}>
					Student
				</button>
				<button
					className='w-28 block mx-auto px-5 py-2 text-white rounded-full bg-red-500 duration-300 hover:-translate-y-2 disabled:bg-red-800 disabled:translate-y-0'
					onClick={handleUpdateRole}
					disabled={
						role === 'instructor' || role === 'admin' ? true : false
					}>
					Instructor
				</button>
				<button
					className='w-28 block mx-auto px-5 py-2 text-white rounded-full bg-blue-400 duration-300 hover:-translate-y-2 disabled:bg-blue-800 disabled:translate-y-0'
					onClick={handleUpdateRole}
					disabled={
						role === 'admin' || role === 'admin' ? true : false
					}>
					Admin
				</button>
			</div>
		</div>
	);
};

export default User;
