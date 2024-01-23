'use client';

import Link from 'next/link';
import Container from '../Container';
import AdminNavItem from './AdminNavItem';
import { MdDashboard } from 'react-icons/md';
import { usePathname } from 'next/navigation';

const AdminNav = () => {
	const pathName = usePathname();
	return (
		<div className='w-full top-20 border-1 pt-3'>
			<Container>
				<div>
					<Link href='/admin'>
						<AdminNavItem
							label='Dashboard'
							icon={MdDashboard}
							selected={pathName === '/admin'}
						/>
					</Link>
					<Link href='/admin/add-products'>
						<AdminNavItem
							label='Add Products'
							icon={MdDashboard}
							selected={pathName === '/admin/add-products'}
						/>
					</Link>
					<Link href='/admin/manage-products'>
						<AdminNavItem
							label='Manage Products'
							icon={MdDashboard}
							selected={pathName === '/admin/manage-products'}
						/>
					</Link>
					<Link href='/admin/manage-orders'>
						<AdminNavItem
							label='Manage Orders'
							icon={MdDashboard}
							selected={pathName === '/admin/manage-orders'}
						/>
					</Link>
				</div>
			</Container>
		</div>
	);
};

export default AdminNav;
