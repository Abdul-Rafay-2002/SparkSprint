import { getCurrentUser } from '@/actions/getCurrentUser';
import NullData from '@/app/components/NullData';
import OrderClient from './OrderClient';
import getOrdersByUserId from '@/actions/getOrdersByUserId';
import Container from '../components/Container';

const Orders = async () => {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		return <NullData title='Oops! Access Denied.' />;
	}
	const orders = await getOrdersByUserId(currentUser.id);
	if (!orders) {
		return <NullData title='No Order Yet!' />;
	}
	return (
		<div className='w-full bg-[#061621] py-10'>
			<div className='max-w-[1380px] mx-auto'>
				<OrderClient orders={orders} />
			</div>
		</div>
	);
};

export default Orders;
