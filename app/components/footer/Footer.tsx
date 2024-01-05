import React from 'react';
import FooterList from './FooterList';
import Link from 'next/link';
import { FaFacebookF, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';
import Container from '../Container';
const Footer = () => {
	return (
		<footer className='bg-[#001e2b] text-slate-100 text-sm border-t-2 border-emerald-500'>
			<Container>
				<div className='flex flex-col md:flex-row justify-between pt-16 pb-8'>
					<FooterList>
						<h4 className='text-lg'>Shop Category</h4>
						<Link className=' text-slate-300/50 hover:text-[#00ED64]' href='#'>
							Phones
						</Link>
						<Link className=' text-slate-300/50 hover:text-[#00ED64]' href='#'>
							Laptops
						</Link>
						<Link className=' text-slate-300/50 hover:text-[#00ED64]' href='#'>
							Desktops
						</Link>
						<Link className=' text-slate-300/50 hover:text-[#00ED64]' href='#'>
							Tvs
						</Link>
						<Link className=' text-slate-300/50 hover:text-[#00ED64]' href='#'>
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
						<Link className=' text-slate-300/50 hover:text-[#00ED64]' href='#'>
							Watches
						</Link>
						<Link className=' text-slate-300/50 hover:text-[#00ED64]' href='#'>
							FAQs
						</Link>
					</FooterList>
					<div className='w-full md:w-1/3 mb-6 md:mb-0'>
						<h4 className='text-lg'>About Us</h4>
						<p className='text-slate-300/50 mt-2'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
							dolorum, quidem debitis modi nisi sed non quia neque incidunt rem?
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
				<hr className='my-8 border-solid border-gray-700/50' />
				<Container>
					<p className='text-slate-300/50 text-md'>
						&copy; {new Date().getFullYear()} Spark Sprint - All right reserved.
						by
						<Link
							className='text-md font-bold hover:text-[#00ED64]'
							href='https://abdulrafayportfolio.vercel.app/'
							target='_blank'>
							Rafay Dev
						</Link>
					</p>
				</Container>
			</div>
		</footer>
	);
};

export default Footer;
