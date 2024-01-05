'use client';
import { useCallback, useState } from 'react';
import Avatar from '../Avatar';
import { AiFillCaretDown } from 'react-icons/ai';
import Link from 'next/link';
const UserMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleOpen = useCallback(() => {
		setIsOpen((prev) => !prev);
	}, []);
	return (
		<div className='bg-[#ffffff1a] flex w-12 h-12 justify-center items-center rounded-full cursor-pointer '>
			<div onClick={toggleOpen} className=''>
				<Avatar color='#fff' src={''} />
			</div>
			{isOpen && (
				<div className='absolute bg-emerald-200 w-[350px] z-50  top-12 -right-20 rounded-md shadow-md shadow-emerald-400 border-2 border-emerald-200'>
					<div className='flex justify-evenly'>
						<Link href={'#'} className='text-black'>Login</Link>
						<Link href={'#'} className='text-black'>register</Link>
					</div>
				</div>
			)}
		</div>
	);
};

export default UserMenu;
