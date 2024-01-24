import { getCurrentUser } from '@/actions/getCurrentUser';
import AdminNav from '../components/admin/AdminNav';
import NullData from '../components/NullData';

export const metadata = {
	title: 'Spark Sprint | Admin Dashboard',
	description: 'This is only for admin view',
};

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
	const currentUser = await getCurrentUser();
	if (!currentUser || currentUser.role !== 'ADMIN') {
		return <NullData title='Oops! Access Denied.' />;
	}
	return (
		<div className='w-full bg-[#061621] py-10'>
			<div className='flex items-start gap-10 max-w-[1920px] mx-auto xl:px-20 md:px-3 px-4 w-full'>
				<div className='w-[20%]'>
					<AdminNav />
				</div>
				<div className='pt-4 w-[80%]'>{children}</div>
			</div>
		</div>
	);
};

export default AdminLayout;
