import { Link } from 'react-router-dom';

const AClass = ({ c }) => {
	const { img, name, instructor_name, seats, attended, price, id } = c;
	console.log(c);
	return (
		<div
			className={`p-5 font-bree rounded ${
				seats ? 'bg-white' : 'bg-primary'
			}`}>
			<img className='rounded w-full h-56 object-fill' src={img} alt='' />
			<h4 className='title-sm mt-5'>{name}</h4>
			<p>
				Instructor:{' '}
				<span className='font-semibold'>{instructor_name}</span>
			</p>
			<p>
				Available Seats: <span className='font-semibold'>{seats}</span>
			</p>
			<p>
				Attended: <span className='font-semibold'>{attended}</span>
			</p>
			<div className='flex justify-between'>
				<p>
					Price: <span className='font-semibold'>${price}</span>
				</p>
				<Link
					to={`/class/:${id}`}
					className={`btn ${
						seats ? 'bg-secondary' : 'bg-yellow-400'
					}`}
					onClick={(e) => !seats && e.preventDefault()}>
					Buy
				</Link>
			</div>
		</div>
	);
};

export default AClass;
