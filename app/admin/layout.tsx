import AdminNav from '../components/admin/AdminNav';

export const metadata = {
	title: 'Spark Sprint | Admin Dashboard',
	description: 'This is only for admin view',
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='flex items-start gap-2'>
			<div>
				<AdminNav />
			</div>
			<div className='pt-4'>{children}</div>
		</div>
	);
};

export default AdminLayout;
