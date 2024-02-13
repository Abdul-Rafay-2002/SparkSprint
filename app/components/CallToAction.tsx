'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import Link from 'next/link';
import Container from './Container';

interface CallToActionProps{
	heading: string,
	description?: string,
	buttonText?: string,
	buttonLink?: string,
}

interface SettingsProps {
	dots: boolean;
	fade: boolean;
	infinite: boolean;
	speed: number;
	slidesToShow: number;
	arrows: boolean;
	autoplay: boolean;
	autoplaySpeed: number;
	slidesToScroll: number;
}
const CallToAction:React.FC<CallToActionProps> = ({heading, description, buttonLink, buttonText}) => {
	const settings: SettingsProps = {
		dots: false,
		fade: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<Container>
			<div className='flex flex-row items-center justify-center ctabg px-8 py-4 rounded-3xl mb-20 w-full h-full'>
				<div className='w-[50%] h-full px-6'>
					<h2 className='text-white text-5xl mb-2'>
						Spark Sprint: Your Premier Electronics E-Commerce Destination
					</h2>
					<p className='text-slate-300/70 mb-6'>
						Experience seamless shopping and stay ahead in the tech game with
						Spark Sprint.
					</p>
					<Link
						href='#'
						className='!bg-white !border-white text-slate-900 font-bold btn hover:!shadow-white'>
						Shop Now
					</Link>
				</div>
				<div className='w-[50%] h-full'>
					<Slider {...settings} className='w-[100%] h-full'>
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
