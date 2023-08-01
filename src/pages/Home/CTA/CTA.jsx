import { Link } from 'react-router-dom';
import leftRays from '../../../assets/rays-l.png';
import rightRays from '../../../assets/rays-r.png';
import topShape from '../../../assets/shape-green.png';
import bottomShape from '../../../assets/shape-white.png';

const CTA = () => {
	return (
		<div className='h-[90dvh] bg-secondary text-white mt-10 relative flex flex-col justify-center items-center'>
			<img
				className='absolute top-0 -translate-y-3/4'
				src={topShape}
				alt=''
			/>
			{/* Title */}
			<div className='relative'>
				<img
					className='absolute -top-7 -left-12'
					src={leftRays}
					alt=''
				/>
				<h1 className='title-lg'>Adventure Awaits</h1>
				<img
					className='absolute -top-7 -right-12'
					src={rightRays}
					alt=''
				/>
			</div>
			{/* Secondary title */}
			<h3 className='title-sm mt-12'>Come Explore The Great Outdoors</h3>
			{/* CTA Btn */}
			<Link className='btn-lg mt-10 bg-primary font-candal'>View Classes</Link>
			<img
				className='absolute bottom-0'
				src={bottomShape}
				alt=''
			/>
		</div>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export default CTA;
