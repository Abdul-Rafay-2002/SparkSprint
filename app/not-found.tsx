'use client';

import Container from './components/Container';
import Button from './components/Button';
import { useRouter } from 'next/navigation';
import {  BsArrowLeft } from 'react-icons/bs';
import Image from 'next/image';

export default function NotFound() {
	const router = useRouter();
	return (
		<>
			<div className='bg-[#001e2b] w-full h-[80vh]'>
				<Container>
					<div className='flex items-center h-[80vh] justify-center'>
						<div className='text-center flex flex-col items-center gap-2'>
							<Image
								src='/undraw_page_not_found_re_e9o6.svg'
								alt='page not found'
								height={350}
								width={350}
                                className='mb-10'
							/>
							<h1 className='text-5xl text-white'>404 - Page Not Found</h1>
							<p className='text-lg mt-4 my-6'>
								The page you are looking for does not exist. It may have been
								moved, or removed altogether.
							</p>
							<Button
								icon={BsArrowLeft}
								label='Back to homepage'
								onClick={() => router.push('/')}
							/>
						</div>
					</div>
				</Container>
			</div>
		</>
	);
}
