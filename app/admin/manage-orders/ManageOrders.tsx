'use client';

import { Order, User } from '@prisma/client';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { formatPrice } from '@/utils/FormatPrice';
import Heading from '@/app/components/Heading';
import Status from '@/app/components/Status';
import {  IoMdDoneAll } from 'react-icons/io';
import {  TbTruckDelivery } from 'react-icons/tb';
import ActionBtn from '@/app/components/ActionBtn';
import { FaEye } from 'react-icons/fa6';
import { useCallback } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import moment from 'moment';
import { IoTimerOutline } from 'react-icons/io5';
import { LuBadgeCheck } from 'react-icons/lu';
import { BsSendCheckFill } from 'react-icons/bs';

interface ManageOrdersProps {
	orders: ExtendedOrder[];
}

type ExtendedOrder = Order & {
	user: User;
};

const ManageOrders: React.FC<ManageOrdersProps> = ({ orders }) => {
	let rows: any = [];
	const router = useRouter();

	if (orders) {
		rows = orders.map((order) => {
			return {
				id: order.id,
				customer: order.user.name,
				amount: formatPrice(order.amount / 100),
				paymentstatus: order.status,
				date: moment(order.createdDate).fromNow(),
				deliveryStatus: order.deliveryStatus,
			};
		});
	}
	const columns: GridColDef[] = [
		{ field: 'id', headerName: 'ID', width: 220 },
		{ field: 'customer', headerName: 'Customer', width: 200 },
		{
			field: 'amount',
			headerName: 'Amount(USD)',
			width: 150,
			renderCell: (params) => {
				return <div className='font-bold'>{params.row.amount}</div>;
			},
		},
		{
			field: 'paymentstatus',
			headerName: 'Payment Status',
			width: 200,
			renderCell: (params) => {
				return (
					<div className='font-bold'>
						{params.row.paymentstatus === 'pending' ? (
							<Status
								text='Pending'
								bg='bg-gray-300'
								color='text-slate-700 border-2 border-slate-700'
								icon={IoTimerOutline}
							/>
						) : params.row.paymentstatus === 'complete' ? (
							<Status
								text='Completed'
								bg='bg-green-400'
								color='text-teal-900 border-2 border-teal-900'
								icon={LuBadgeCheck}
							/>
						) : null}
					</div>
				);
			},
		},
		{
			field: 'deliverystatus',
			headerName: 'Delivery Status',
			width: 200,
			renderCell: (params) => {
				return (
					<div className='font-bold'>
						{params.row.deliveryStatus === 'pending' ? (
							<Status
								text='Pending'
								bg='bg-gray-300'
								color='text-slate-700 border-2 border-slate-700'
								icon={IoTimerOutline}
							/>
						) : params.row.deliveryStatus === 'dispatched' ? (
							<Status
								text='Dispatched'
								bg='bg-indigo-300'
								color='text-violet-700 border-2 border-indigo-400'
								icon={TbTruckDelivery}
							/>
						) : params.row.deliveryStatus === 'delivered' ? (
							<Status
								text='Delivered'
								bg='bg-green-400'
								color='text-teal-900 border-2 border-teal-900'
								icon={IoMdDoneAll}
							/>
						) : null}
					</div>
				);
			},
		},
		{ field: 'date', headerName: 'Date', width: 130 },
		{
			field: 'action',
			headerName: 'Actions',
			width: 200,
			renderCell: (params) => {
				return (
					<div className='flex items-center gap-4 w-full'>
						<ActionBtn
							icon={TbTruckDelivery}
							onClick={() => {
								handleDispatch(params.row.id);
							}}
						/>
						<ActionBtn
							icon={BsSendCheckFill}
							onClick={() => {
								handleDeliver(params.row.id);
							}}
						/>
						<ActionBtn
							icon={FaEye}
							onClick={() => {
								router.push(`/order/${params.row.id}`);
							}}
						/>
					</div>
				);
			},
		},
	];

	const handleDispatch = useCallback((id: string) => {
		axios
			.put('/api/order', {
				id,
				deliveryStatus: 'dispatched',
			})
			.then((res) => {
				toast.success('Order Dispatched!');
				router.refresh();
			})
			.catch((err) => {
				toast.error('Opps! Something went wrong.');
				console.log(err);
			});
	}, []);

	const handleDeliver = useCallback((id: string) => {
		axios
			.put('/api/order', {
				id,
				deliveryStatus: 'delivered',
			})
			.then((res) => {
				toast.success('Order Delivered!');
				router.refresh();
			})
			.catch((err) => {
				toast.error('Opps! Something went wrong.');
				console.log(err);
			});
	}, []);

	return (
		<div>
			<div>
				<Heading
					title='Manage Orders'
					customColor='text-white text-black uppercase underline decoration-[#00ED64] underline-offset-8 mb-8'
				/>
			</div>
			<DataGrid
				rows={rows}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: { page: 0, pageSize: 10 },
					},
				}}
				pageSizeOptions={[5, 10, 15, 20]}
				checkboxSelection
				disableRowSelectionOnClick
			/>
		</div>
	);
};

export default ManageOrders;
