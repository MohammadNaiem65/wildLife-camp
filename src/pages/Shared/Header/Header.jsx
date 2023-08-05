import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthContextProvider/AuthContextProvider';
import { MetaContext } from '../../../Providers/MetaContextProvider/MetaContextProvider';
import logo from '../../../assets/logo.png';
import avatar from '../../../assets/avatar.jpg';
import ActiveLink from './ActiveLink';
import { Link } from 'react-router-dom';

const Header = () => {
	const { showNavbar } = useContext(MetaContext);
	const { user, signOutUser } = useContext(AuthContext);

	// ! Handle log out
	const handleLogOut = () => {
		signOutUser();
	};

	return (
		<div
			className={`h-[6.5rem] w-full px-20 absolute top-0 left-0 flex justify-between items-center z-[100] ${
				showNavbar ? 'translate-y-0 bg-slate-700' : '-translate-y-32'
			}`}>
			{/* WildLife Camp logo */}
			<img className='h-20' src={logo} alt='WildLife Camp logo' />
			{/* Nav Links */}
			<div className='flex gap-x-5'>
				<ActiveLink to='/' className='btn btn-primary py-1'>
					Home
				</ActiveLink>
				<ActiveLink to='/instructors' className='btn btn-primary py-1'>
					Instructors
				</ActiveLink>
				<ActiveLink to='/classes' className='btn btn-primary py-1'>
					Classes
				</ActiveLink>
				{user ? (
					<ActiveLink
						to='/dashboard'
						className='btn btn-primary py-1'>
						Dashboard
					</ActiveLink>
				) : (
					<ActiveLink to='/login' className='btn btn-primary py-1'>
						Login
					</ActiveLink>
				)}
			</div>
			{/* Login dependents */}

			{user ? (
				<div className='flex gap-x-5 items-center'>
					<img
						className='h-14 aspect-square object-contain rounded-full ring-2 ring-primary ring-offset-2 ring-offset-slate-700 cursor-pointer'
						src={user.photoURL ? user.photoURL : avatar}
						alt='WildLife Camp logo'
						title={user.displayName}
					/>
					<button
						className='btn btn-primary h-10 bg-primary'
						onClick={handleLogOut}>
						Log Out
					</button>
				</div>
			) : (
				<Link
					to={'/login'}
					className='btn btn-primary h-10 bg-secondary'>
					Login
				</Link>
			)}
		</div>
	);
};

export default Header;
