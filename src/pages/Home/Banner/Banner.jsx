import { Link } from 'react-router-dom';
import backgroundImage from '../../../assets/camping.jpg';
import logoBg from '../../../assets/logo-bg.png';
import leftRays from '../../../assets/rays-l.png';
import rightRays from '../../../assets/rays-r.png';
import shapeWhite from '../../../assets/shape-white.png';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthContextProvider/AuthContextProvider';

const Banner = () => {
	const { user } = useContext(AuthContext);
	return (
		<div
			className='h-screen text-white relative before:content-[""] before:absolute before:inset-0 before:bg-gradient-to-b before:from-[rgba(0,0,0,0.5)] before:to-[rgba(0,0,0,0.5)] before:z-0'
			style={{
				backgroundImage: `url(${backgroundImage})`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			}}>
			<div className='h-full pt-28 relative font-candal flex flex-col justify-evenly items-center z-10'>
				{/* Logo Img */}
				<img
					className='absolute top-0'
					src={logoBg}
					alt='WildLife camping logo'
				/>
				{/* Nav Links */}
				<div className='mt-5 flex gap-x-7'>
					<Link className='btn btn-primary'>Home</Link>
					<Link className='btn btn-primary'>Instructors</Link>
					<Link className='btn btn-primary'>Classes</Link>
					<Link className='btn btn-primary'>Instructors</Link>
					{user && (
						<Link className='btn btn-primary'>Dashboard</Link>
					)}
				</div>
				{/* Title */}
				<div className='relative'>
					<img
						className='absolute -top-7 -left-12'
						src={leftRays}
						alt=''
					/>
					<h1 className='title-lg text-white'>WILDLIFE CAMP</h1>
					<img
						className='absolute -top-7 -right-12'
						src={rightRays}
						alt=''
					/>
				</div>
				{/* Sub Title */}
				<h3 className='title-sm -mt-12'>
					The Best{' '}
					<span className='text-primary border-b-2 border-yellow-300'>
						Summer Camping School
					</span>{' '}
					In The Town
				</h3>
				{/* CTA Btn */}
				<Link className='btn-lg -mt-2 bg-secondary'>View Classes</Link>
			</div>
			{/* Footer img */}
			<img className='w-full h-12 absolute bottom-0' src={shapeWhite} />
		</div>
	);
};

export default Banner;
