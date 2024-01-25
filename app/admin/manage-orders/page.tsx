import { getCurrentUser } from '@/actions/getCurrentUser';
import NullData from '@/app/components/NullData';
import ManageOrders from './ManageOrders';
import getOrders from '@/actions/getOrders';


const ManageProducts = async () => {
	const orders = await getOrders();
	const currentUser = await getCurrentUser();
	if (!currentUser || currentUser.role !== 'ADMIN') {
		return <NullData title='Oops! Access Denied.' />;
	}
	return (
		<div>
			<ManageOrders orders={orders} />
		</div>
	);
};

export default ManageProducts;
