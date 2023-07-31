import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthContextProvider/AuthContextProvider';
import { MetaContext } from '../../../Providers/MetaContextProvider/MetaContextProvider';
import logo from '../../../assets/logo.png';
import ActiveLink from './ActiveLink';

const Header = () => {
	const { showNavbar } = useContext(MetaContext);
	const { user } = useContext(AuthContext);
	console.log(showNavbar);
	return (
		<div
			className={`h-28 w-full absolute top-0 flex justify-between items-center z-[100] bg-green-500 ${
				showNavbar ? 'translate-y-0' : '-translate-y-32'
			}`}>
			{/* WildLife Camp logo */}
			<img className='h-20' src={logo} alt='WildLife Camp logo' />
			{/* Nav Links */}
			<div className='flex gap-x-5'>
				<ActiveLink to='/' className='btn btn-primary py-1'>Home</ActiveLink>
				<ActiveLink to='/instructors' className='btn btn-primary py-1'>Instructors</ActiveLink>
				<ActiveLink to='/classes' className='btn btn-primary py-1'>Classes</ActiveLink>
				<ActiveLink to='/instructors' className='btn btn-primary py-1'>Instructors</ActiveLink>
				{user && <ActiveLink to='/dashboard' className='btn btn-primary py-1'>Dashboard</ActiveLink>}
			</div>
            {/* Login dependents */}
            <div className=''>
                <button className='btn btn-primary bg-primary'>Log Out</button>
            </div>
		</div>
	);
};

export default Header;
