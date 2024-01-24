import { getCurrentUser } from '@/actions/getCurrentUser';
import NullData from '@/app/components/NullData';

const ManageProducts = async () => {
	const currentUser = await getCurrentUser();
	if (!currentUser || currentUser.role !== 'ADMIN') {
		return <NullData title='Oops! Access Denied.' />;
	}
	return <div></div>;
};

export default ManageProducts;
