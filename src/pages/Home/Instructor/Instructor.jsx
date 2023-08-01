const Instructor = ({ instructor }) => {
	const { instructor_image, instructor_name } = instructor;

	return (
		<div className='bg-white p-5 rounded'>
			<img
				className='w-full h-[22rem] rounded object-cover'
				src={instructor_image}
				alt=''
			/>
			<p className='title-sm text-center mt-4'>{instructor_name}</p>
		</div>
	);
};

export default Instructor;
