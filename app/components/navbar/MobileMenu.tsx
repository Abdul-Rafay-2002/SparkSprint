'use client';

import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';

const MobileMenu = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<div className='bg-[#ffffff1a] relative flex w-12 h-12 justify-center items-center rounded-full cursor-pointer max-[500px]:w-8 max-[500px]:h-8'>
			{!toggle ? (
				<RxHamburgerMenu
					size={22}
					color='#fff'
					className='max-[500px]:w-4'
					onClick={() => setToggle(true)}
				/>
			) : (
				<AiOutlineClose
					size={22}
					color='#fff'
					className='max-[500px]:w-4'
					onClick={() => setToggle(false)}
				/>
			)}

			{toggle && (
				<div className='fixed top-20 max-[500px]:top-16 left-0 w-full min-h-screen bg-gray-900 py-40  flex flex-col justify-start items-center'>
					<ul className='flex justify-start flex-col  w-full h-full'>
						<li className='text-base hover:bg-[#00ED64] py-3 px-6 hover:text-black hover:transition-colors font-semibold'>
							<Link href={'/'}>Home</Link>
						</li>
						<li className='text-base hover:bg-[#00ED64] py-3 px-6 hover:text-black hover:transition-colors font-semibold'>
							<Link href={'/Products'}>Products</Link>
						</li>
						<li className='text-base hover:bg-[#00ED64] py-3 px-6 hover:text-black hover:transition-colors font-semibold'>
							<Link href={'/faqs'}>FAQ</Link>
						</li>
						<li className='text-base hover:bg-[#00ED64] py-3 px-6 hover:text-black hover:transition-colors font-semibold'>
							<Link href={'/return-exchange'}>Return & Exchange</Link>
						</li>
						<li className='text-base hover:bg-[#00ED64] py-3 px-6 hover:text-black hover:transition-colors font-semibold'>
							<Link href={'/shipping-policy'}>Shipping Policy</Link>
						</li>
						<li className='text-base hover:bg-[#00ED64] py-3 px-6 hover:text-black hover:transition-colors font-semibold'>
							<Link href={'/contact-us'}>Contact Us</Link>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default MobileMenu;
