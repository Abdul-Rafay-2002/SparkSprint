import React, { useState } from 'react';
import Container from '../Container';
import { BsSearch } from 'react-icons/bs';
import CartCount from './CartCount';
import UserMenu from './UserMenu';
import { getCurrentUser } from '@/actions/getCurrentUser';
import SearchBar from '../SearchBar';
import MobileMenu from './MobileMenu';

const NavBar = async () => {
	const currentUser = await getCurrentUser();

	return (
		<header className='sticky top-0  w-full bg-[#001e2b] backdrop-blur-md z-40 shadow-sm border-b-2 border-emerald-500'>
			<div className='py-4'>
				<Container>
					<div className='flex items-center justify-between flex-row gap-3 md:gap-0'>
						<div className='w-30 rotate-container'>
							<a href='/'>
								<h3 className='uppercase logo' data-text='SparkSprint'>
									SparkSprint
								</h3>
							</a>
						</div>
						<div className='max-[1440px]:hidden'>
							<ul className='flex justify-between gap-6'>
								<li className='text-base hover:text-green-500 hover:transition-colors font-semibold'>
									All
								</li>
								<li className='text-base hover:text-green-500 hover:transition-colors font-semibold'>
									Phones
								</li>
								<li className='text-base hover:text-green-500 hover:transition-colors font-semibold'>
									Headphones
								</li>
								<li className='text-base hover:text-green-500 hover:transition-colors font-semibold'>
									LCDs & TVs
								</li>
								<li className='text-base hover:text-green-500 hover:transition-colors font-semibold'>
									Speakers
								</li>
								<li className='text-base hover:text-green-500 hover:transition-colors font-semibold'>
									PCs & Desktops
								</li>
								<li className='text-base hover:text-green-500 hover:transition-colors font-semibold'>
									Laptops
								</li>
								<li className='text-base hover:text-green-500 hover:transition-colors font-semibold'>
									Watches
								</li>
								<li className='text-base hover:text-green-500 hover:transition-colors font-semibold'>
									Accessories
								</li>
							</ul>
						</div>

						<div className='flex justify-between gap-5   max-[500px]:gap-3 items-center md:gap-8 relative'>
							<div className='max-[1440px]:block hidden'>
								<MobileMenu />
							</div>
							<SearchBar />
							<CartCount />
							<UserMenu currentUser={currentUser} />
						</div>
					</div>
				</Container>
			</div>
		</header>
	);
};

export default NavBar;
