import { RiDeleteBin6Fill } from 'react-icons/ri';

const SelectedClass = ({ aClass }) => {
	// ! Variable definitions
	const { _id, img, name, instructor_name, seats, attended, price } = aClass;

	return (
		<div className='p-5 flex items-center rounded odd:bg-[#9BA4B5]'>
			<div className='flex-[2] flex items-center'>
				<img className='w-2/5 aspect-video rounded' src={img} alt='' />
				<div className='ml-3'>
					<h3 className='text-2xl'>{name}</h3>
					<p>By {instructor_name}</p>
				</div>
			</div>
			<div className='flex-1 text-center'>
				<h3 className='text-lg ml-3'>Available: {seats}</h3>
				<p>Attended: {attended}</p>
			</div>
			<h2 className='flex-1 text-center text-xl font-bold'>
				<span className='text-end inline-block w-24 mr-10'>
					$ {price}
				</span>
			</h2>
			<div className='flex-1 text-center flex justify-center gap-x-4'>
				<button className='text-xl text-white px-5 py-1 bg-secondary rounded-full duration-300 hover:-translate-y-2'>
					Enroll
				</button>
				<button className='text-4xl hover:text-red-600'>
					<RiDeleteBin6Fill />
				</button>
			</div>
		</div>
	);
};

export default SelectedClass;
