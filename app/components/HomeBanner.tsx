'use client';
import Link from 'next/link';
import Container from './Container';

const HomeBanner = () => {
	return (
		<div className='gradient-animation relative w-full col '>
			<Container>
				<div className='mx-auto px-8 py-20 h-screen flex flex-col gap-2 md:flex-row items-center justify-evenly '>
					<div className='text-center'>
						<h1 className='text-[#1a1b1b] mb-4 max-[768px]:text-5xl'>
							Where Quality Reigns Supreme. <br /> Discover Spark Sprint Today!
						</h1>
						<h3 className='text-slate-950/80 max-[768px]:text-2xl'>
							Unwrap Exclusive Deals on Cutting-edge Wireless Electronics!
						</h3>
						<Link href='/products/' className='btn mt-10'>
							Shop Now
						</Link>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default HomeBanner;
