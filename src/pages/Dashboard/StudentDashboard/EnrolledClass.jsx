const EnrolledClass = ({ c }) => {
	// ! Variable definitions
	const { img, name, instructor_name } = c;

    return (
		<div className='p-5 bg-white font-bree flex items-center rounded'>
			<img className='rounded' src={img} />
			<div className="ml-3">
				<h2 className="text-2xl">{name}</h2>
				<p className="text">By {instructor_name}</p>
			</div>
		</div>
	);
};

export default EnrolledClass;
