import { useContext } from 'react';
import { MetaContext } from '../../../Providers/MetaContextProvider/MetaContextProvider';
import logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
	const { showNavbar } = useContext(MetaContext);
	console.log(showNavbar);
	return (
		<div
			className={`h-28 w-full absolute top-0 z-[100] bg-green-500 ${
				showNavbar ? 'translate-y-0' : '-translate-y-32'
			}`}>
			{/* WildLife Camp logo */}
			<img className='h-20' src={logo} alt='WildLife Camp logo' />
			{/* Nav Links */}
			<div className='mt-5 flex gap-x-4'>
				<Link className='btn btn-primary'>Home</Link>
				<Link className='btn btn-primary'>Instructors</Link>
				<Link className='btn btn-primary'>Classes</Link>
				<Link className='btn btn-primary'>Instructors</Link>
				<Link className='btn btn-primary'>Dashboard</Link>
			</div>
		</div>
	);
};

export default Header;
