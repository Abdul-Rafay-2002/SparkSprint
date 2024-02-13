'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

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
		slidesToScroll: 1,
	};

	return (
		<div>
			<div className=''>
				<p>CTA</p>
			</div>
			<div className=''>
				<Slider {...settings} className='w-[50%] h-full'>
					<div className='w-1/2 relative aspect-video'>
						<Image
							src='/banner-image.png'
							alt='hero'
							fill
							className='object-contain'
							priority
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						/>
					</div>
					<div className='w-1/2 relative aspect-video'>
						<Image
							src='/banner-image2.png'
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
	);
};

export default CallToAction;
