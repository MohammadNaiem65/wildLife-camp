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
				<Link
					to={
						role === 'student'
							? '/dashboard/student/selected-classes'
							: role === 'instructor'
							? '/dashboard/instructor/add-class'
							: '/dashboard/admin/manage-classes'
					}
					onClick={() => setIsActivePrimaryButton(true)}
					className={`w-1/2 h-10 flex justify-center items-center rounded-tl hover:bg-primary/70 hover:text-white peer ${
						isActivePrimaryButton &&
						'bg-primary/90 text-white rounded-tr'
					} ${isSecondLinkHovered && 'rounded-tr-none'}
					`}>
					{role === 'student'
						? 'Selected Classes'
						: role === 'instructor'
						? 'Add a Class'
						: 'Manage Classes'}
				</Link>
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
					className={`w-1/2 h-10 flex justify-center items-center rounded-tr peer-hover: hover:bg-primary/70 hover:text-white peer-hover:rounded-tl-none ${
						isActivePrimaryButton ||
						'bg-primary/90 text-white rounded-tl'
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
				className={`bg-primary/90 ${
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
