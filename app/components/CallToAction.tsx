'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import Link from 'next/link';
import Container from './Container';

interface SettingsProps {
	dots: boolean;
	fade: boolean;
	infinite: boolean;
	speed: number;
	slidesToShow: number;
	arrows: boolean;
	autoplay: boolean;
	draggable: boolean;
	autoplaySpeed: number;
	slidesToScroll: number;
}
const CallToAction = () => {
	const settings: SettingsProps = {
		dots: false,
		fade: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		speed: 1000,
		slidesToShow: 1,
		draggable: false,
		slidesToScroll: 1,
	};

	return (
		<Container>
			<div className='flex flex-col-reverse lg:flex-row items-center justify-center bg-[#052929] px-8 py-4 rounded-3xl mb-20 w-full h-full'>
				<div className='lg:w-[50%] w-[100%] h-full py-6 px-6'>
					<h2 className='text-white text-center lg:text-left text-3xl  md:text-4xl lg:text-5xl mb-2'>
						Spark Sprint: Your Premier Electronics E-Commerce Destination
					</h2>
					<p className='text-slate-300/70 mb-6 text-center lg:text-left'>
						Experience seamless shopping and stay ahead in the tech game with
						Spark Sprint.
					</p>
					<Link
						href='/products/'
						className='!bg-white !table lg:!inline-block mx-auto lg:mx-none lg:text-left !border-white text-slate-900 font-bold btn hover:!shadow-white'>
						Shop Now
					</Link>
				</div>
				<div className='lg:w-[50%] w-[100%] h-full mt-6 lg:mt-0'>
					<Slider {...settings} className='lg:w-[100%] w-[100%] h-full'>
						<div className='w-1/2 relative aspect-video'>
							<Image
								src='/hero.png'
								alt='hero'
								fill
								className='object-contain'
								priority
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
							/>
						</div>
						<div className='w-1/2 relative aspect-video'>
							<Image
								src='/banner.png'
								alt='hero'
								fill
								className='object-contain'
								priority
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
							/>
						</div>
						<div className='w-1/2 relative aspect-video'>
							<Image
								src='/banner-image12.png'
								alt='hero'
								fill
								className='object-contain'
								priority
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
							/>
						</div>
					</Slider>
				</div>
			</div>
		</Container>
	);
};

export default CallToAction;
