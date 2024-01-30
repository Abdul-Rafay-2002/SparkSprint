'use client';

import Heading from '@/app/components/Heading';
import Status from '@/app/components/Status';
import { formatPrice } from '@/utils/FormatPrice';
import { Order } from '@prisma/client';
import moment from 'moment';
import { useRouter } from 'next/navigation';
import { FaBagShopping } from 'react-icons/fa6';
import { ImBoxAdd } from 'react-icons/im';
import { IoMdDoneAll } from 'react-icons/io';
import { IoTimerOutline } from 'react-icons/io5';
import { LuBadgeCheck } from 'react-icons/lu';
import { TbTruckDelivery } from 'react-icons/tb';
import OrderItem from './OrderItem';

interface OrderDetailsProps {
	order: Order;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ order }) => {
	const router = useRouter();
	return (
		<div>
			<Heading
				title={`Order : ${order.id}`}
				customColor='text-white text-black !mb-0'
			/>
			<p className='text-slate-500'>{moment(order.createdDate).calendar()}</p>

			<div className='flex items-start gap-4 mb-12 mt-8'>
				<div className='bg-[#ffffff1a] p-3 rounded-full'>
					<ImBoxAdd size={26} />
				</div>
				<div className='w-full'>
					<h3 className='mb-4 text-white mt-1'>Order Information </h3>
					<div className='flex gap-3  mb-2'>
						<h5 className='font-bold text-white'>Order ID:</h5>
						<p className='text-slate-400'>{order.id}</p>
					</div>
					<div className='flex gap-3  mb-2'>
						<h5 className='font-bold text-white'>Total Amount:</h5>
						<p className='text-slate-400'>{formatPrice(order.amount / 100)}</p>
					</div>
					<div className='flex gap-3 items-center mb-2'>
						<h5 className='font-bold text-white'>Payment Status:</h5>
						<p>
							{order.status === 'pending' ? (
								<Status
									text='Pending'
									bg='bg-gray-300'
									color='text-slate-700 !p-1 text-sm border-2 border-slate-700'
									icon={IoTimerOutline}
								/>
							) : order.status === 'complete' ? (
								<Status
									text='Completed'
									bg='bg-green-400'
									color='text-teal-900 !p-1 text-sm border-2 border-teal-900'
									icon={LuBadgeCheck}
								/>
							) : null}
						</p>
					</div>
					<div className='flex gap-3 items-center mb-2'>
						<h5 className='font-bold text-white'>Delivery Status:</h5>
						<p>
							{order.deliveryStatus === 'pending' ? (
								<Status
									text='Pending'
									bg='bg-gray-300'
									color='text-slate-700 !p-1 text-sm border-2 border-slate-700'
									icon={IoTimerOutline}
								/>
							) : order.deliveryStatus === 'dispatched' ? (
								<Status
									text='Dispatched'
									bg='bg-indigo-300'
									color='text-violet-700 !p-1 text-sm border-2 border-indigo-400'
									icon={TbTruckDelivery}
								/>
							) : order.deliveryStatus === 'delivered' ? (
								<Status
									text='Delivered'
									bg='bg-green-400'
									color='text-teal-900 !p-1 text-sm border-2 border-teal-900'
									icon={IoMdDoneAll}
								/>
							) : null}
						</p>
					</div>
					<div className='flex gap-3 items-center mb-2'>
						<h5 className='font-bold text-white'>Timestamp:</h5>
						<p className='text-slate-400'>
							{moment(order.createdDate).fromNow()}
						</p>
					</div>
				</div>
			</div>
			<div className='flex items-start gap-4 mt-8 w-full'>
				<div className='bg-[#ffffff1a] p-3 rounded-full'>
					<FaBagShopping size={26} />
				</div>
				<div className='w-full max-w-[1180px]'>
					<h3 className='mb-4 w-full text-white mt-1'>Ordered Products </h3>
					<div className='grid grid-cols-5 text-sm gap-4 pb-2 items-center border-b-2 border-slate-500'>
						<div className='col-span-2 justify-self-start font-bold text-slate-400 '>
							PRODUCT
						</div>
						<div className='justify-self-center font-bold text-slate-400 '>
							PRICE
						</div>
						<div className='justify-self-center font-bold text-slate-400 '>
							QTY
						</div>
						<div className='justify-self-end font-bold text-slate-400 '>
							TOTAL
						</div>
					</div>
					{order.products &&
						order.products.map((product) => {
							return <OrderItem key={product.id} product={product}></OrderItem>;
						})}
				</div>
			</div>
		</div>
	);
};

export default OrderDetails;
