import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthContextProvider/AuthContextProvider';

const Footer = () => {
	const { user } = useContext(AuthContext);
    
	return (
		<div className='bg-slate-700 text-stone-200 pt-6 pb-3 flex flex-col justify-between items-center'>
			<div className='w-full h-48 flex justify-evenly items-center'>
				<div className=''>
					<h4 className='text-xl font-candal'>Important Links</h4>
					{/* Quick Links */}
					<div className='mt-4 font-bree flex flex-col gap-x-7'>
						<Link to={'/'} className=''>
							Home
						</Link>
						<Link to={'/instructors'} className=''>
							Instructors
						</Link>
						<Link to={'/classes'} className=''>
							Classes
						</Link>
						<Link to={'/login'} className=''>
							Login
						</Link>
						{user && (
							<Link className='btn btn-primary'>Dashboard</Link>
						)}
					</div>
				</div>
				{/* Center div */}
				<div className='flex flex-col justify-center items-center -ml-12'>
					<img className='w-24' src={logo} alt='' />
					<h3 className='title-sm mt-2'>Wild Life Camp</h3>
				</div>
				<div className=''>
					<h4 className='text-xl font-candal'>Quick Links</h4>
					{/* Quick Links */}
					<div className='mt-4 font-bree flex flex-col gap-x-7'>
						<Link to={'/'} className=''>
							Home
						</Link>
						<Link to={'/instructors'} className=''>
							Instructors
						</Link>
						<Link to={'/classes'} className=''>
							Classes
						</Link>
						<Link to={'/login'} className=''>
							Login
						</Link>
						{user && (
							<Link className='btn btn-primary'>Dashboard</Link>
						)}
					</div>
				</div>
			</div>
			<p className='text-sm mt-8'>
				Copyright © 2023 Wildlife Camp, All Rights Reserved
			</p>
		</div>
	);
};

export default Footer;
