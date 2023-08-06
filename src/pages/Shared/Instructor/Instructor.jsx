const Instructor = ({ name, img, email }) => {
	return (
		<div className='bg-white p-5 rounded'>
			<img
				className='w-full h-[22rem] rounded object-cover'
				src={img}
				alt=''
			/>
			<p className='title-sm text-center mt-4'>{name}</p>
			{email && <p className='font-bree text-center mt-4'>Email: <span className="font-semibold">{email}</span></p>}
		</div>
	);
};

export default Instructor;
