import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Providers/AuthContextProvider/AuthContextProvider';

const AClass = ({ c }) => {
	// ! Variable definitions
	const { img, name, instructor_name, seats, attended, price, _id } = c;
	const { user, role, loggedIn } = useContext(AuthContext);

	const handleBuyClass = (id) => {
		if (loggedIn !== true) {
			return Swal.fire('Oops...', 'Please log in first!', 'error');
		} else if (role !== 'student') {
			return Swal.fire(
				'Oops...',
				'Only Students can enroll courses!',
				'error'
			);
		} else {
			fetch(
				`http://localhost:5000/student/class/select/${id}?email=${user.email}`,
				{
					method: 'PATCH',
				}
			)
				.then((res) => res.json())
				.then((data) => {
					if (data.modifiedCount > 0) {
						Swal.fire({
							icon: 'success',
							title: 'Successfully added!',
						});
					} else {
						Swal.fire({
							icon: 'error',
							title: 'Oops..',
							text: 'Something went wrong!',
						});
					}
				});
		}
	};

	return (
		<div
			className={`p-5 font-bree rounded duration-300 cursor-pointer hover:-translate-y-2 ${
				seats
					? 'bg-white hover:bg-slate-400 hover:text-stone-100'
					: 'bg-primary text-stone-100'
			}`}>
			<img
				className='rounded w-full h-56 object-fill'
				src={img}
				alt={`${name}`}
				loading='lazy'
			/>
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
						seats
							? 'bg-secondary'
							: 'disabled:bg-yellow-400 disabled:translate-y-0'
					}`}
					disabled={seats ? false : true}
					onClick={() => handleBuyClass(_id)}
					title={seats || 'No seats available'}>
					Select
				</button>
			</div>
		</div>
	);
};

export default AClass;
