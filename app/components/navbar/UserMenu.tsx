'use client';
import { useCallback, useState } from 'react';
import Avatar from '../Avatar';
import Link from 'next/link';
import MenuItem from './MenuItem';
import { signOut } from 'next-auth/react';
import BackDrop from './BackDrop';
import { SafeUser } from '@/types';
import { MdPaid } from 'react-icons/md';
import { ImUser } from 'react-icons/im';
interface UserMenuProps {
	currentUser: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleOpen = useCallback(() => {
		setIsOpen((prev) => !prev);
	}, []);

	return (
		<div className='bg-[#ffffff1a] flex w-12 h-12 justify-center items-center rounded-full cursor-pointer '>
			<div onClick={toggleOpen} className=''>
				<Avatar color='#fff' src={currentUser?.image} />
			</div>
			{isOpen && (
				<div className='absolute bg-[#061621] w-[300px] z-50  top-16 right-0 rounded-xl py-6  Boxshadow '>
					{currentUser ? (
						<div>
							<div className='flex justify-between flex-col items-center mb-6'>
								<div className='bg-black w-[65px] h-[65px] flex items-center justify-center ml-2 my-2 rounded-full  '>
									<Avatar color='#fff' src={currentUser?.image} />
								</div>
								<div className='text-center'>
									<h5>{currentUser?.name}</h5>
									<p className='text-gray-400/75'>{currentUser?.email}</p>
								</div>
							</div>
							<div className='flex justify-evenly flex-col text-center'>
								<Link
									href='/orders'
									className='text-white bg-slate-800 p-2 px-5 text-sm mb-1 hover:bg-[#00ED64] hover:text-black transition-colors'>
									<MenuItem onClick={toggleOpen}>
										<div className='flex items-center gap-2'>
											<MdPaid size={22} />
											Your Orders
										</div>
									</MenuItem>
								</Link>
								<Link
									href='/admin'
									className='text-white bg-slate-800 p-2 px-5 text-sm mb-1 hover:bg-[#00ED64] hover:text-black transition-colors'>
									<MenuItem onClick={toggleOpen}>
										<div className='flex items-center gap-2'>
											<ImUser size={22} />
											Admin Dashboard
										</div>
									</MenuItem>
								</Link>
								<MenuItem
									onClick={() => {
										toggleOpen();
										signOut();
									}}
									customClass='text-white bg-slate-800 border-2 border-slate-800 p-2 hover:bg-slate-950 transition-colors px-5 text-sm rounded-md w-[90px] mx-auto mt-4'>
									Logout
								</MenuItem>
							</div>
						</div>
					) : (
						<div>
							<div className='bg-black w-16 h-16 flex items-center justify-center mx-auto my-2 rounded-full mb-4 border-2 border-[#00ED64]'>
								<Avatar color='#fff' src={''} />
							</div>
							<div className='flex justify-evenly'>
								<Link
									href='/login'
									className='ext-white bg-slate-800 border-2 border-slate-800 p-0.5 text-white hover:bg-slate-950 transition-colors px-5 text-sm rounded-md  mx-auto mt-4'>
									<MenuItem onClick={toggleOpen}>Login</MenuItem>
								</Link>
								<Link
									href='/register'
									className='ext-white bg-slate-800 border-2 border-slate-800 p-0.5 text-white hover:bg-slate-950 transition-colors px-4 text-sm rounded-md  mx-auto mt-4'>
									<MenuItem onClick={toggleOpen}>Register</MenuItem>
								</Link>
							</div>
						</div>
					)}
				</div>
			)}
			{isOpen ? <BackDrop onClick={toggleOpen} /> : null}
		</div>
	);
};

export default UserMenu;
