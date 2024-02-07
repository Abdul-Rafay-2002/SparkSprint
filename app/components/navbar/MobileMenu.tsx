'use client';

import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';

const MobileMenu = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<div className='bg-[#ffffff1a] relative flex w-12 h-12 justify-center items-center rounded-full cursor-pointer max-[500px]:w-10 max-[500px]:h-10'>
			{!toggle ? (
				<RxHamburgerMenu
					size={22}
					color='#fff'
					onClick={() => setToggle(true)}
				/>
			) : (
				<AiOutlineClose
					size={22}
					color='#fff'
					onClick={() => setToggle(false)}
				/>
			)}

			{toggle && (
				<div className='fixed top-20 left-0 w-full min-h-screen bg-gray-900  flex flex-col justify-center items-center'>
					<ul className='flex justify-start flex-col  w-full h-full'>
						<li className='text-base hover:bg-[#00ED64] py-3 px-6 hover:text-black hover:transition-colors font-semibold'>
							All
						</li>
						<li className='text-base hover:bg-[#00ED64] hover:text-black py-3 px-6 hover:transition-colors font-semibold'>
							Phones
						</li>
						<li className='text-base hover:bg-[#00ED64] hover:text-black py-3 px-6 hover:transition-colors font-semibold'>
							Headphones
						</li>
						<li className='text-base hover:bg-[#00ED64] hover:text-black py-3 px-6 hover:transition-colors font-semibold'>
							LCDs & TVs
						</li>
						<li className='text-base hover:bg-[#00ED64] hover:text-black py-3 px-6 hover:transition-colors font-semibold'>
							Speakers
						</li>
						<li className='text-base hover:bg-[#00ED64] hover:text-black py-3 px-6 hover:transition-colors font-semibold'>
							PCs & Desktops
						</li>
						<li className='text-base hover:bg-[#00ED64] hover:text-black py-3 px-6 hover:transition-colors font-semibold'>
							Laptops
						</li>
						<li className='text-base hover:bg-[#00ED64] hover:text-black py-3 px-6 hover:transition-colors font-semibold'>
							Watches
						</li>
						<li className='text-base hover:bg-[#00ED64] hover:text-black py-3 px-6 hover:transition-colors font-semibold'>
							Accessories
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default MobileMenu;
