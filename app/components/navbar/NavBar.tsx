import React, { useState } from 'react';
import Container from '../Container';
import { BsSearch } from 'react-icons/bs';
import CartCount from './CartCount';
import UserMenu from './UserMenu';
import { getCurrentUser } from '@/actions/getCurrentUser';
import SearchBar from '../SearchBar';
import MobileMenu from './MobileMenu';
import Link from 'next/link';

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
									<Link href={'/'}>Home</Link>
								</li>
								<li className='text-base hover:text-green-500 hover:transition-colors font-semibold'>
									<Link href={'/products'}>Products</Link>
								</li>
								<li className='text-base hover:text-green-500 hover:transition-colors font-semibold'>
									<Link href={'/faqs'}>FAQ</Link>
								</li>
								<li className='text-base hover:text-green-500 hover:transition-colors font-semibold'>
									<Link href={'/return-exchange'}>Return & Exchange</Link>
								</li>
								<li className='text-base hover:text-green-500 hover:transition-colors font-semibold'>
									<Link href={'/shipping-policy'}>Shipping Policy</Link>
								</li>
								<li className='text-base hover:text-green-500 hover:transition-colors font-semibold'>
									<Link href={'/contact-us'}>Contact Us</Link>
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
