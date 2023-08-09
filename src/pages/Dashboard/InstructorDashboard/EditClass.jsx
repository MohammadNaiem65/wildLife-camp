import { useLoaderData, useNavigate } from 'react-router-dom';
import leftRays from '../../../assets/rays-l.png';
import rightRays from '../../../assets/rays-r.png';
import Swal from 'sweetalert2';

const EditClass = () => {
	// ! Variable definitions
	const navigate = useNavigate();
	const classData = useLoaderData();
	const { _id, name, price, img } = classData;

	// ! Handle class update
	const handleClassUpdate = (e) => {
		e.preventDefault();
		const form = e.target;

		const title = form.title.value || name;
		const image = form.image.value || img;
		const price2 = form.price.value || price;

		const updatedClassData = {
			name: title,
			img: image,
			price: price2,
			status: 'pending',
		};

		fetch(`http://localhost:5000/classes/class/${_id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updatedClassData),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
					navigate('/dashboard/instructor/my-classes');
					Swal.fire(
						'Successful!',
						'Updated Successfully!',
						'success'
					);
				} else {
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: 'Something went wrong!',
					});
				}
			});
	};

	return (
		<div className='container'>
			{/* Title */}
			<div className='w-fit mx-auto mt-16 relative'>
				<img
					className='w-10 absolute -top-7 -left-12'
					src={leftRays}
					alt=''
				/>
				<h1 className='text-2xl font-bree font-semibold'>
					Update Class Details
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
				onSubmit={handleClassUpdate}>
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
							defaultValue={name}
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
							defaultValue={img}
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
							defaultValue={price}
						/>
					</>
				</div>
				<button
					className='btn btn-primary btn-lg mt-16'
					type='submit'
					onSubmit={handleClassUpdate}>
					Submit
				</button>
			</form>
		</div>
	);
};

export default EditClass;
