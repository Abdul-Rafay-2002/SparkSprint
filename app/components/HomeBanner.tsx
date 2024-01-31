'use client';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Container from './Container';
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

const HomeBanner = () => {
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
		<div className='gradient-animation relative w-full col '>
			<Container>
				<div className='mx-auto px-8 py-20 flex flex-col gap-2 md:flex-row items-center justify-evenly '>
					<div className='text-left'>
						<h1 className='text-[#00ED64] mb-4'>
							Winter Wonderland <br />
							Spark Sprint!
						</h1>
						<h3 className='text-slate-100'>
							Unwrap Exclusive Deals on Cutting-edge Wireless Electronics!
						</h3>
						<Link href='#' className='btn mt-10'>
							Shop Now
						</Link>
					</div>
					<Slider {...settings} className='w-[50%] h-[50vh]'>
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
			</Container>
		</div>
	);
};

export default HomeBanner;
