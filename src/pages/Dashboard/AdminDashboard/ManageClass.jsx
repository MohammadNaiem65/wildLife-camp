import Swal from 'sweetalert2';

const ManageClass = ({ c, refresh, setRefresh }) => {
	// ! Variable definitions
	const {
		img,
		name,
		price,
		status,
		attended,
		seats,
		instructor_img,
		instructor_name,
		instructor_email,
		_id,
	} = c;

	const handleStatusUpdate = (status) => {
		fetch(
			`http://localhost:5000/admin/class/${_id}/status?status=${status}`,
			{ method: 'PATCH' }
		)
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0 || data.deletedCount > 0) {
					Swal.fire({
						icon: 'success',
						title: 'Successful',
					});
					setRefresh(!refresh);
				} else {
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: 'Something went wrong!',
					});
				}
			})
			.catch(() => {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Something went wrong!',
				});
			});
	};

	return (
		<div
			className={`mt-10 p-5 font-bree flex items-center gap-x-2 rounded ${
				status === 'approved' ? 'bg-slate-400' : 'bg-gray-200'
			}`}>
			{/* Class details */}
			<div className='flex-[2] flex items-center'>
				<img
					className='w-64 h-44 object-cover rounded'
					src={img}
					alt=''
					loading='lazy'
				/>
				<div className='ml-4'>
					<h3 className='text-2xl'>{name}</h3>
					<p className=''>
						<span className='w-20 inline-block'>Price</span>
						<span>: ${price}</span>
					</p>
					<p>
						<span className='w-20 inline-block'>Status</span>
						<span className='first-letter:uppercase inline-block'>
							: {status}
						</span>
					</p>
					<p>
						<span className='w-20 inline-block'>Enrolled</span>
						<span>: {attended}</span>
					</p>
					<p>
						<span className='w-20 inline-block'>Available</span>
						<span>: {seats}</span>
					</p>
				</div>
			</div>

			{/* Instructor details */}
			<div className='flex-1 text-center'>
				<img
					className='w-24 mx-auto aspect-square rounded-full object-cover ring-2 ring-offset-2 ring-secondary ring-offset-inherit'
					src={instructor_img}
					alt=''
					loading='lazy'
				/>
				<h3>{instructor_name}</h3>
				<p>Email: {instructor_email}</p>
			</div>
			{/* Options */}
			<div className='flex-1 ml-14 text-center text-slate-800 flex flex-col justify-center gap-y-4'>
				<button
					className='w-28 block mx-auto px-5 py-2 text-white rounded-full bg-green-400 duration-300 hover:-translate-y-2 disabled:bg-green-800 disabled:translate-y-0'
					onClick={() => handleStatusUpdate('approved')}
					disabled={status === 'pending' ? false : true}>
					Approve
				</button>
				<button
					className='w-28 block mx-auto px-5 py-2 text-white rounded-full bg-red-400 duration-300 hover:-translate-y-2 disabled:bg-red-800 disabled:translate-y-0'
					onClick={() => handleStatusUpdate('declined')}
					disabled={status === 'pending' ? false : true}>
					Decline
				</button>
				<button
					className='w-28 block mx-auto px-5 py-2 text-white rounded-full bg-blue-300 duration-300 hover:-translate-y-2 disabled:bg-blue-800 disabled:translate-y-0'
					disabled={status === 'pending' ? false : true}>
					Feedback
				</button>
			</div>
		</div>
	);
};

export default ManageClass;
