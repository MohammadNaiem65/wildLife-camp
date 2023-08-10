import { useContext, useEffect, useState } from 'react';
import { MetaContext } from '../../../Providers/MetaContextProvider/MetaContextProvider';
import { AuthContext } from '../../../Providers/AuthContextProvider/AuthContextProvider';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
	// ! Variable definitions
	const { setShowNavbar } = useContext(MetaContext);
	const { role } = useContext(AuthContext);
	const [isSecondLinkHovered, setIsSecondLinkHovered] = useState(false);
	const [isActivePrimaryButton, setIsActivePrimaryButton] = useState(true);

	// Show navbar
	useEffect(() => {
		const unsubscribe = () => setShowNavbar(true);
		return unsubscribe();
	}, []);

	return (
		<div className='container text-black'>
			{/* Header */}
			<div className='text-xl font-candal flex justify-evenly'>
				{/* Left button */}
				<Link
					to={
						role === 'student'
							? '/dashboard/student/enrolled-classes'
							: role === 'instructor'
							? '/dashboard/instructor/my-classes'
							: '/dashboard/admin/manage-classes'
					}
					onClick={() => setIsActivePrimaryButton(true)}
					className={`w-1/2 h-12 text-[#27374D] flex justify-center items-center rounded-tl hover:text-white peer ${
						isActivePrimaryButton
							? 'bg-[#9BA4B5] rounded-tr hover:bg-[#9BA4B5]'
							: 'hover:bg-[#D0D0D0]'
					} ${isSecondLinkHovered && 'rounded-tr-none'}
					`}>
					{role === 'student'
						? 'Enrolled Classes'
						: role === 'instructor'
						? 'My Classes'
						: 'Manage Classes'}
				</Link>
				{/* Right button */}
				<Link
					to={
						role === 'student'
							? '/dashboard/student/selected-classes'
							: role === 'instructor'
							? '/dashboard/instructor/add-class'
							: '/dashboard/admin/manage-users'
					}
					onMouseEnter={() => setIsSecondLinkHovered(true)}
					onMouseLeave={() => setIsSecondLinkHovered(false)}
					onClick={() => setIsActivePrimaryButton(false)}
					className={`w-1/2 h-12 flex justify-center items-center rounded-tr hover:text-white peer-hover:rounded-tl-none ${
						isActivePrimaryButton
							? 'hover:bg-[#D0D0D0] '
							: 'bg-[#9BA4B5] text-[#27374D] rounded-tl hover:bg-[#9BA4B5]'
					}
					`}>
					{role === 'student'
						? 'Selected Classes'
						: role === 'instructor'
						? 'Add a Class'
						: 'Manage Users'}
				</Link>
			</div>

			<div
				className={` p-black ${
					isActivePrimaryButton ? 'rounded-tr' : 'rounded-tl'
				} ${isSecondLinkHovered && 'rounded-tr-none'}`}>
				<Outlet />
			</div>
		</div>
	);
};

export default Dashboard;
