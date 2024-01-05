import React from 'react';
import Container from '../Container';
import { BsSearch } from 'react-icons/bs';
import CartCount from './CartCount';
import UserMenu from './UserMenu';
const NavBar = () => {
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
							<ul className='flex justify-between'>
								<li>menu items</li>
								<li>menu items</li>
								<li>menu items</li>
								<li>menu items</li>
								<li>menu items</li>
								<li>menu items</li>
								<li>menu items</li>
								<li>menu items</li>
							</ul>
						</div>
						<div className='flex justify-between gap-5 items-center md:gap-8 relative'>
							<div className='bg-[#ffffff1a]  flex w-12 h-12 justify-center items-center rounded-full cursor-pointer'>
								<BsSearch size={22} color='#fff' />
							</div>
							<CartCount />
							<UserMenu />
						</div>
					</div>
				</Container>
			</div>
		</header>
	);
};

export default NavBar;
