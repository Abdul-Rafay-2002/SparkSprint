'use client';

import { formatPrice } from '@/utils/FormatPrice';
import { truncateText } from '@/utils/truncateText';
import { CartProductType } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';

interface OrderItemProps {
	product: CartProductType;
}

const OrderItem: React.FC<OrderItemProps> = ({ product }) => {
	return (
		<div className='grid grid-cols-5 text-xs md:text-sm gap-4 border-b-2 border-slate-500 py-4 items-center'>
			<div className='flex items-center col-span-2 gap-3'>
				<div className='bg-[#2945506b] p-2 py-4 w-20 h-22 rounded'>
					<Link href={`/product/${product.id}`}>
						<Image
							src={product.selectedImg.image}
							alt={product.name}
							width={50}
							height={50}
							className='m-auto'
						/>
					</Link>
				</div>
				<div className='font-bold text-md flex flex-col gap-1'>
					<Link href={`/product/${product.id}`}>
						<span className='font-bold text-white'>
							{truncateText(product.name)}
						</span>
					</Link>
					<span className='font-bold text-sm text-slate-400'>
						Color: {product.selectedImg.color}
					</span>
					<span className='font-bold text-sm text-slate-400'>
						Brand: {product.brand}
					</span>
				</div>
			</div>
			<div className='col-span-1 justify-self-center'>
				<p className='text-sm'>{formatPrice(product.price)}</p>
			</div>
			<div className='col-span-1 justify-self-center font-bold text-[#00ED64]'>
				{product.quantity}
			</div>
			<div className='col-span-1 justify-self-end font-bold text-[#00ED64]'>
				{formatPrice(product.price * product.quantity)}
			</div>
		</div>
	);
};

export default OrderItem;
