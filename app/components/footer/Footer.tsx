import React from 'react';
import FooterList from './FooterList';
import Link from 'next/link';
import { FaFacebookF, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';
import Container from '../Container';
import Image from 'next/image';
const Footer = () => {
	return (
		<footer className='bg-[#001e2b] text-slate-100 text-sm border-t-2 border-emerald-500'>
			<Container>
				<div className='flex flex-col md:flex-row justify-between pt-16 pb-8'>
					<FooterList>
						<h4 className='text-lg'>Shop Category</h4>
						<Link
							className=' text-slate-300/50 hover:text-[#00ED64]'
							href='/products?category=Phones'>
							Phones
						</Link>
						<Link
							className=' text-slate-300/50 hover:text-[#00ED64]'
							href='/products?category=Laptops'>
							Laptops
						</Link>
						<Link
							className=' text-slate-300/50 hover:text-[#00ED64]'
							href='/products?category=Headphones'>
							Headphones
						</Link>
						<Link
							className=' text-slate-300/50 hover:text-[#00ED64]'
							href='/products?category=PCs%20%26%20Desktops'>
							Tvs
						</Link>
						<Link
							className=' text-slate-300/50 hover:text-[#00ED64]'
							href='/products?category=Accessories'>
							Accessories
						</Link>
					</FooterList>
					<FooterList>
						<h4 className='text-lg'>Customer Services</h4>
						<Link className=' text-slate-300/50 hover:text-[#00ED64]' href='#'>
							Contact Us
						</Link>
						<Link className=' text-slate-300/50 hover:text-[#00ED64]' href='#'>
							Shipping Policy
						</Link>
						<Link className=' text-slate-300/50 hover:text-[#00ED64]' href='#'>
							Return & Exchange
						</Link>
						<Link
							className=' text-slate-300/50 hover:text-[#00ED64]'
							href='/products?category=Watches'>
							Watches
						</Link>
						<Link className=' text-slate-300/50 hover:text-[#00ED64]' href='#'>
							FAQs
						</Link>
					</FooterList>
					<div className='w-full md:w-1/3 mb-6 md:mb-0'>
						<h4 className='text-lg'>About Us</h4>
						<p className='text-slate-300/50 mt-2'>
							Experience the future today with Sparksprint, where every product
							is carefully selected to complement and enhance your unique
							lifestyle.
						</p>
					</div>
					<FooterList>
						<h4 className='text-lg'>Follow Us</h4>
						<div className='flex gap-6'>
							<Link
								href='#'
								className='bg-[#00ED64]/20 border-2 border-[#00ED64]/40 p-2 rounded-full text-white hover:scale-110 transition-all'>
								<FaFacebookF
									size={24}
									className='text-slate-300/50 hover:text-[#00ED64]'
								/>
							</Link>
							<Link
								href='#'
								className='bg-[#00ED64]/20 border-2 border-[#00ED64]/40 p-2 rounded-full text-white hover:scale-110 transition-all'>
								<FaGithub
									size={24}
									className='text-slate-300/50 hover:text-[#00ED64]'
								/>
							</Link>
							<Link
								href='#'
								className='bg-[#00ED64]/20 border-2 border-[#00ED64]/40 p-2 rounded-full text-white hover:scale-110 transition-all'>
								<FaInstagram
									size={24}
									className='text-slate-300/50 hover:text-[#00ED64]'
								/>
							</Link>
							<Link
								href='#'
								className='bg-[#00ED64]/20 border-2 border-[#00ED64]/40  p-2 rounded-full text-white hover:scale-110 transition-all'>
								<FaYoutube
									size={24}
									className='text-slate-300/50 hover:text-[#00ED64]'
								/>
							</Link>
						</div>
					</FooterList>
				</div>
			</Container>
			<div>
				<hr className='border-solid border-gray-700/50' />
				<Container>
					<p className='text-slate-300/50 text-md my-6 flex gap-2 '>
						&copy; {new Date().getFullYear()} Spark Sprint - All right reserved.
						by
						<Link
							className='text-md font-bold hover:text-[#00ED64]'
							href='https://abdulrafayportfolio.vercel.app/'
							target='_blank'>
							<Image
								src='https://abdulrafayportfolio.vercel.app/static/media/footer-logo.0723028e116b4f67fdcc.png'
								width={40}
								height={40}
								alt='Rafay Dev'></Image>
						</Link>
					</p>
				</Container>
			</div>
		</footer>
	);
};

export default Footer;
