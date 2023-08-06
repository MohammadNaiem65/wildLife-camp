import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './Carousel.css';

const Carousel = () => {
	// ! Swiper instance
	new Swiper('.main-slider', {
		loop: true,
		slidesPerView: 1,
		centeredSlides: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		// And if we need scrollbar
		scrollbar: {
			el: '.swiper-scrollbar',
		},
		modules: [Navigation, Pagination, Autoplay],
	});
	
	return (
		<div className='w-1/2 h-96 mx-auto my-16 relative'>
			{/* Main Slider */}
			<div className='main-slider h-full text-white font-bree relative overflow-hidden rounded'>
				<div className='swiper-wrapper'>
					{/* <!-- Slides --> */}
					<div
						className='swiper-slide relative before:content-[""] before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-[rgba(0,0,0,0.8)] before:z-0'
						style={{
							backgroundImage: `url(https://i.ibb.co/FhH5gYq/image.png)`,
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
						}}>
						<p className='text-2xl absolute bottom-16 z-10'>
							"Learn new Skills, Make new Friends"
						</p>
					</div>
					<div
						className='swiper-slide relative before:content-[""] before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-[rgba(0,0,0,0.8)] before:z-0'
						style={{
							backgroundImage: `url(https://i.ibb.co/pZ47BML/image.png)`,
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
						}}>
						<p className='text-2xl absolute bottom-16 z-10'>
							"Have Fun and Make Great Memories"
						</p>
					</div>
					<div
						className='swiper-slide relative before:content-[""] before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-[rgba(0,0,0,0.8)] before:z-0'
						style={{
							backgroundImage: `url(https://i.ibb.co/jg65tSd/image.png)`,
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
						}}>
						<p className='text-2xl absolute bottom-16 z-10'>
							"Get Taste of the Wild"
						</p>
					</div>
					<div
						className='swiper-slide relative before:content-[""] before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-[rgba(0,0,0,0.8)] before:z-0'
						style={{
							backgroundImage: `url(https://i.ibb.co/6P8J9j7/image.png)`,
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
						}}>
						<p className='text-2xl absolute bottom-16 z-10'>
							"Discover your Hidden Talents and Passions"
						</p>
					</div>
				</div>
				{/* <!-- If we need pagination --> */}
				<div className='swiper-pagination'></div>

				{/* <!-- If we need scrollbar --> */}
				<div className='swiper-scrollbar'></div>
			</div>

			{/* Pagination */}
			<div className='swiper-button-prev bg-secondary/30'>
				<FaArrowLeft />
			</div>
			<div className='swiper-button-next'>
				<FaArrowRight />
			</div>
		</div>
	);
};

export default Carousel;
