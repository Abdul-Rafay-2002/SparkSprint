import { getCurrentUser } from '@/actions/getCurrentUser';
import NullData from '@/app/components/NullData';
import ManageProducts from './ManageProducts';
import getProducts from '@/actions/getProducts';

const ManageOrders = async () => {
	const currentUser = await getCurrentUser();
	const products = await getProducts({ category: null });

	if (!currentUser || currentUser.role !== 'ADMIN') {
		return <NullData title='Oops! Access Denied.' />;
	}
	return (
		<div>
			<ManageProducts products={products} />
		</div>
	);
};

export default ManageOrders;
