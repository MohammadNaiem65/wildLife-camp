import Swal from 'sweetalert2';

const AClass = ({ c }) => {
	const { img, name, instructor_name, seats, attended, price, id: _id } = c;

	const handleBuyClass = (_id) => {
		Swal.fire('Success!', 'The purchase was successful!', 'success');
	};
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
				<button
					className={`btn ${
						seats ? 'bg-secondary' : 'disabled:bg-yellow-400 disabled:translate-y-0'
					}`}
					disabled={seats ? false : true}
					onClick={() => handleBuyClass(_id)}>
					Buy
				</button>
			</div>
		</div>
	);
};

export default AClass;
