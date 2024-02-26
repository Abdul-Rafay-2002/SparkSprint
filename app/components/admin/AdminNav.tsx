'use client';

import Link from 'next/link';
import AdminNavItem from './AdminNavItem';
import { RxDashboard } from 'react-icons/rx';
import { usePathname, useRouter } from 'next/navigation';
import { BsBoxes } from 'react-icons/bs';
import { TbSettingsUp } from 'react-icons/tb';
import { GrChapterAdd } from 'react-icons/gr';
import { signOut } from 'next-auth/react';

const AdminNav = () => {
	const pathName = usePathname();
	const router = useRouter();
	const handleLogout = () => {
		signOut(); // Call your signOut function
		router.push('/'); // Redirect to the homepage
	};
	return (
		<div className='w-full top-20 border-1 py-3'>
			<div className=' flex lg:block flex-col sm:flex-row gap-2 flex-1'>
				<Link href='/admin'>
					<AdminNavItem
						label='Dashboard'
						icon={RxDashboard}
						selected={pathName === '/admin'}
					/>
				</Link>
				<Link href='/admin/add-products'>
					<AdminNavItem
						label='Add Products'
						icon={GrChapterAdd}
						selected={pathName === '/admin/add-products'}
					/>
				</Link>
				<Link href='/admin/manage-products'>
					<AdminNavItem
						label='Manage Products'
						icon={BsBoxes}
						selected={pathName === '/admin/manage-products'}
					/>
				</Link>
				<Link href='/admin/manage-orders'>
					<AdminNavItem
						label='Manage Orders'
						icon={TbSettingsUp}
						selected={pathName === '/admin/manage-orders'}
					/>
				</Link>
			</div>
		</div>
	);
};

export default AdminNav;
