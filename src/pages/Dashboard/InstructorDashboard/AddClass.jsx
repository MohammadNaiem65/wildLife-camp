import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthContextProvider/AuthContextProvider';
import leftRays from '../../../assets/rays-l.png';
import rightRays from '../../../assets/rays-r.png';

const AddClass = () => {
	// ! Required variables
	const { user } = useContext(AuthContext);

	// ! Handle class submit
	const handleClassSubmit = (e) => {
		e.preventDefault();
		const form = e.target;

		const title = form.title.value;
		const img = form.image.value;
		const price = form.price.value;

		const classDetails = {
			name: title,
			instructor_name: user.displayName,
			seats: 100,
			status: 'pending',
			price: price,
			img: img,
			attended: 0,
			instructor_email: user.email,
		};

		console.log(classDetails);
	};

	return (
		<div className='w-3/4 mx-auto'>
			{/* Title */}
			<div className='w-fit mx-auto mt-16 relative'>
				<img
					className='w-10 absolute -top-7 -left-12'
					src={leftRays}
					alt=''
				/>
				<h1 className='text-2xl font-bree font-semibold'>
					Write Class Details
				</h1>
				<img
					className='w-10 absolute -top-7 -right-12'
					src={rightRays}
					alt=''
				/>
			</div>

			{/* Form */}
			<form
				className='ml-20 mt-10 flex items-center justify-evenly'
				onSubmit={handleClassSubmit}>
				<div>
					{/* Title */}
					<>
						<label
							className='font-bree text-2xl block mb-1 mt-5'
							htmlFor='title'>
							Title:
						</label>
						<input
							className='font-bree ml-3 px-5 py-3 text-lg text-gray-400 rounded outline-2 focus:outline-secondary'
							type='text'
							id='title'
							name='title'
							placeholder='Enter class title'
							required
						/>
					</>
					{/* Email */}
					<>
						<label
							className='font-bree text-2xl block mb-1 mt-5'
							htmlFor='image'>
							Image Link:
						</label>
						<input
							className='font-bree ml-3 px-5 py-3 text-lg text-gray-400 rounded outline-2 focus:outline-secondary'
							type='text'
							id='image'
							name='image'
							placeholder='Enter class image link'
							required
						/>
					</>
					{/* Price */}
					<>
						<label
							className='font-bree text-2xl block mb-1 mt-5'
							htmlFor='price'>
							Price:
						</label>
						<input
							className='font-bree ml-3 px-5 py-3 text-lg text-gray-400 rounded outline-2 focus:outline-secondary'
							type='text'
							id='price'
							name='price'
							placeholder='Enter class price'
							required
						/>
					</>
				</div>
				<button
					className='btn btn-primary btn-lg mt-16'
					type='submit'
					onSubmit={handleClassSubmit}>
					Submit
				</button>
			</form>
		</div>
	);
};

export default AddClass;
