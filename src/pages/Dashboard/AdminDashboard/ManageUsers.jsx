import { useEffect } from 'react';
import { useState } from 'react';
import User from './User';

const ManageUsers = () => {
	// ! Variable definitions
	const [users, setUsers] = useState([]);
	const [refresh, setRefresh] = useState(false);

	// Get the users
	useEffect(() => {
		fetch('http://localhost:5000/admin/users/all')
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, [refresh]);

	return (
		<>
			{/* Header */}
			<div className='p-4 bg-[#9BA4B5] font-bree flex rounded'>
				<span className='flex-1 text-center'>User Details</span>
				<span className='flex-1 text-center'>Role</span>
				<span className='flex-1 text-center'>Set Role</span>
			</div>
			{/* Body */}
			{users.map((user) => (
				<User
					key={user._id}
					user={user}
					refresh={refresh}
					setRefresh={setRefresh}
				/>
			))}
		</>
	);
};

export default ManageUsers;
