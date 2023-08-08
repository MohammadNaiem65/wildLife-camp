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
							? '/dashboard/student/selected-classes'
							: role === 'instructor'
							? '/dashboard/instructor/add-class'
							: '/dashboard/admin/manage-classes'
					}
					onClick={() => setIsActivePrimaryButton(true)}
					className={`w-1/2 h-12 flex justify-center items-center rounded-tl hover:bg-[#D0D0D0] hover:text-white peer ${
						isActivePrimaryButton &&
						'bg-[#9BA4B5] text-[#27374D] rounded-tr hover:bg-[#9BA4B5]'
					} ${isSecondLinkHovered && 'rounded-tr-none'}
					`}>
					{role === 'student'
						? 'Selected Classes'
						: role === 'instructor'
						? 'Add a Class'
						: 'Manage Classes'}
				</Link>
				{/* Right button */}
				<Link
					to={
						role === 'student'
							? '/dashboard/student/enrolled-classes'
							: role === 'instructor'
							? '/dashboard/instructor/my-classes'
							: '/dashboard/admin/manage-users'
					}
					onMouseEnter={() => setIsSecondLinkHovered(true)}
					onMouseLeave={() => setIsSecondLinkHovered(false)}
					onClick={() => setIsActivePrimaryButton(false)}
					className={`w-1/2 h-12 flex justify-center items-center rounded-tr peer-hover: hover:bg-[#D0D0D0] hover:text-white peer-hover:rounded-tl-none ${
						isActivePrimaryButton ||
						'bg-[#9BA4B5] text-[#27374D] rounded-tl hover:bg-[#9BA4B5]'
					}
					`}>
					{role === 'student'
						? 'Enrolled Classes'
						: role === 'instructor'
						? 'My Classes'
						: 'Manage Users'}
				</Link>
			</div>

			<div
				className={`bg-[#F5F5F5] p-black ${
					isActivePrimaryButton ? 'rounded-tr' : 'rounded-tl'
				} ${isSecondLinkHovered && 'rounded-tr-none'}`}>
				<Outlet />
			</div>

			{/* <div className='p-3 even:bg-primary/20 font-poppins rounded flex justify-between items-center'>
				<div className='w-2/6 flex gap-x-3'>
					<img
						className='w-28 aspect-video rounded'
						src={img}
						alt=''
						loading='lazy'
					/>
					<div>
						<h4 className='text-[1.4rem] font-bubblegum'>{name}</h4>
						<p>
							<span className='font-semibold'>Category:</span>
							<span>{category}</span>
						</p>
					</div>
				</div>
				<div className='w-2/6'>
					<p>
						<span className='font-semibold'>Seller:</span>{' '}
						{seller_name}
					</p>
					<p>
						<span className='font-semibold'>
							Available Quantity:{' '}
						</span>
						{available_quantity}
					</p>
				</div>
				<p className='text-lg font-semibold'>${price}</p>
				<Link to={`/toy/${_id}`} className='btn btn-primary'>
					Details
				</Link>
			</div> */}
		</div>
	);
};

export default Dashboard;
