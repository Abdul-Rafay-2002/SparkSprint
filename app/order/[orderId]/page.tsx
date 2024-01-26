import OrderDetails from './OrderDetails';
import Container from '@/app/components/Container'; 
import getOrderByID from '@/actions/getOrderById';
import NullData from '@/app/components/NullData';
import { getCurrentUser } from '@/actions/getCurrentUser';

interface IPrams {
	orderId?: string;
}

const Order = async ({ params }: { params: IPrams }) => {
	const order = await getOrderByID(params);

    if(!order) return <NullData title='No Orders!'/>
	return (
		<div className='p-2 py-16 bg-[#092635] w-full md:py-10'>
			<Container>
				<OrderDetails order={order}  />
			</Container>
		</div>
	);
};

export default Order;
