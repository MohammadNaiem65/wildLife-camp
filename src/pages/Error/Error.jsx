import { Link } from 'react-router-dom';
import bgImg from '../../assets/404.gif';

const Error = () => {
	return (
		<div
			className='h-screen bg-white flex justify-center items-end'
			style={{
				backgroundImage: `url(${bgImg})`,
				backgroundPosition: 'center',
				backgroundSize: 'contain',
				backgroundRepeat: 'no-repeat',
			}}>
			<Link to={'/'} className='btn-lg mb-10 bg-secondary text-white font-bree'>
				Go To Home
			</Link>
		</div>
	);
};

export default Error;
