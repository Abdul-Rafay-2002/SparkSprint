import React from 'react';
import Container from '../Container';
import { BsSearch } from 'react-icons/bs';
import CartCount from './CartCount';
import UserMenu from './UserMenu';
import { getCurrentUser } from '@/actions/getCurrentUser';

const NavBar = async () => {
	const currentUser = await getCurrentUser();
	return (
		<header className='sticky top-0 w-full bg-[#001e2b] backdrop-blur-md z-40 shadow-sm border-b-2 border-emerald-500'>
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
						<div>
							<ul className='flex justify-between gap-6'>
								<li className='text-base hover:text-green-500 hover:transition-colors font-semibold'>
									All
								</li>
								<li className='text-base hover:text-green-500 hover:transition-colors font-semibold'>
									Phones
								</li>
								<li className='text-base hover:text-green-500 hover:transition-colors font-semibold'>
									Earburds & Headphones
								</li>
								<li className='text-base hover:text-green-500 hover:transition-colors font-semibold'>
									LCD's & TV's
								</li>
								<li className='text-base hover:text-green-500 hover:transition-colors font-semibold'>
									Speakers
								</li>
								<li className='text-base hover:text-green-500 hover:transition-colors font-semibold'>
									PC's & Desktops
								</li>
								<li className='text-base hover:text-green-500 hover:transition-colors font-semibold'>
									Laptops
								</li>
								<li className='text-base hover:text-green-500 hover:transition-colors font-semibold'>
									Watches
								</li>
								<li className='text-base hover:text-green-500 hover:transition-colors font-semibold'>
									Accesories
								</li>
							</ul>
						</div>
						<div className='flex justify-between gap-5 items-center md:gap-8 relative'>
							<div className='bg-[#ffffff1a]  flex w-12 h-12 justify-center items-center rounded-full cursor-pointer'>
								<BsSearch size={22} color='#fff' />
							</div>
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
