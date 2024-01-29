'use client';
import { Order, Product, User } from '@prisma/client';
import { useEffect, useState } from 'react';
import Heading from '../components/Heading';
import { formatPrice } from '@/utils/FormatPrice';
import { formatNumber } from '@/utils/FormatNumber';
interface DashboardProps {
	orders: Order[];
	products: Product[];
	users: User[];
}

type DashboardDataType = {
	[key: string]: {
		label: string;
		digit: number;
	};
};

const Dashboard: React.FC<DashboardProps> = ({ orders, products, users }) => {
	const [dashBoardData, setDashBoardData] = useState<DashboardDataType>({
		sale: {
			label: 'Total Sales',
			digit: 0,
		},
		products: {
			label: 'Total Products',
			digit: 0,
		},
		orders: {
			label: 'Total Order',
			digit: 0,
		},
		paidOrders: {
			label: 'Paid Orders',
			digit: 0,
		},
		unPaidOrders: {
			label: 'Unpaid Orders',
			digit: 0,
		},
		users: {
			label: 'Total Users',
			digit: 0,
		},
	});

	useEffect(() => {
		setDashBoardData((prev) => {
			let tempData = { ...prev };
			const totalSale = orders.reduce((acc, item) => {
				if (item.status === 'complete') {
					return acc + item.amount;
				} else return acc;
			}, 0);

			const paidOrders = orders.filter((order) => {
				return order.status === 'compelete';
			});
			const unPaidOrders = orders.filter((order) => {
				return order.status === 'pending';
			});

			tempData.sale.digit = totalSale;
			tempData.orders.digit = orders.length;
			tempData.paidOrders.digit = paidOrders.length;
			tempData.unPaidOrders.digit = unPaidOrders.length;
			tempData.products.digit = products.length;
			tempData.users.digit = users.length;

			return tempData;
		});
	}, [orders, products, users]);

	const dataKeys = Object.keys(dashBoardData);

	return (
		<div className=''>
			<div className='mb-4'>
				<Heading
					title='Dashboard'
					customColor='text-white text-black uppercase underline decoration-[#00ED64] underline-offset-8 mb-8'
				/>
			</div>
			<div className='grid grid-cols-6 gap-3 max-h-50vh overflow-y-auto'>
				{dataKeys &&
					dataKeys.map((key) => (
						<div
							key={key}
							className='rounded-xl border-2 border-slate-700 p-4 md:px-2 flex flex-col items-center gap-1 transition'>
							<div className='font-bold text-gray-200'>
								{dashBoardData[key].label}
							</div>
							<div className='font-bold text-[#00ED64]'>
								{dashBoardData[key].label === 'Total Sales' ? (
									<>{formatPrice(dashBoardData[key].digit)}</>
								) : (
									<>{formatNumber(dashBoardData[key].digit)}</>
								)}
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default Dashboard;
