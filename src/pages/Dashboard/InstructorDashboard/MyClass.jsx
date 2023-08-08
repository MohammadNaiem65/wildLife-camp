import { BiEdit } from 'react-icons/bi';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const MyClass = ({ myClass, order, handleRemoveClass }) => {
	// ! Required variables
	const { name, attended, status, _id } = myClass;

	return (
		<div className='p-4 font-bree text-[#27374D] bg-[#F3F3F3] flex items-center rounded odd:bg-[#9BA4B5] odd:peer'>
			<span className='flex-1 text-start'>{`${order}. ${name}`}</span>
			<span className='flex-1 text-center'>{attended}</span>
			<span className='flex-1 text-center'>
				<span
					className={`text-center text-white px-4 py-1 inline-block rounded first-letter:uppercase ${
						status === 'approved'
							? 'bg-secondary'
							: status === 'pending'
							? 'bg-yellow-300'
							: 'bg-red-500'
					}`}>
					{status}
				</span>
			</span>
			<div className='flex-1 text-center text-3xl flex justify-center gap-x-4'>
				<Link className='hover:text-blue-200'>
					<BiEdit />
				</Link>
				<button
					className='hover:text-red-600'
					onClick={() => handleRemoveClass(_id)}>
					<RiDeleteBin6Fill />
				</button>
			</div>
		</div>
	);
};

export default MyClass;
