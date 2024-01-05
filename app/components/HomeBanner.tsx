import Link from 'next/link';
import Container from './Container';
import Image from 'next/image';

const HomeBanner = () => {
	return (
		<div className='gradient-animation relative w-full'>
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
				</div>
			</Container>
		</div>
	);
};

export default HomeBanner;
