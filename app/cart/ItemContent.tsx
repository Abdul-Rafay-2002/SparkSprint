'use client';
import { formatPrice } from '@/utils/FormatPrice';
import { CartProductType } from '../product/[productId]/ProductDetails';
import Image from 'next/image';
import Link from 'next/link';
import { truncateText } from '@/utils/truncateText';
import { IoCloseCircle } from 'react-icons/io5';
import SetQuantity from '../components/products/SetQuantity';
import { useCart } from '@/hooks/UseCart';

interface ItemContentProps {
	item: CartProductType;
}

const ItemContent: React.FC<ItemContentProps> = ({ item }) => {
	const { handleRemoveProductFromCart, handleQtyIncrease, handleQtyDecrease } =
		useCart();
	return (
		<div className=' grid grid-cols-1 grid-rows-1 sm:gird-rows-1 sm:grid-cols-5  gap-10  sm:gap-4 border-t-[1.5px] border-green-900 py-4 items-center relative'>
			<IoCloseCircle
				className='absolute top-2 -left-2 text-rose-600 bg-white rounded-full cursor-pointer'
				size={20}
				onClick={() => handleRemoveProductFromCart(item)}
			/>
			<div className='sm:col-span-2 col-span-1'>
				<div className='flex flex-col sm:flex-row sm:items-center gap-3'>
					<div className='bg-[#2945506b] p-2 py-4  sm:w-20 sm:h-22 rounded'>
						<Link href={`/product/${item.id}`}>
							<Image
								src={item.selectedImg.image}
								alt={item.name}
								width={40}
								height={40}
								className='m-auto  !w-32 !h-32 sm:!w-12 sm:!h-12'
							/>
						</Link>
					</div>
					<div className='font-bold text-md flex flex-col gap-1'>
						<Link href={`/product/${item.id}`}>
							<span className='font-bold text-white'>
								{truncateText(item.name)}
							</span>
						</Link>
						<span className='font-bold text-sm text-slate-400'>
							Color: {item.selectedImg.color}
						</span>
						<span className='font-bold text-sm text-slate-400'>
							Brand: {item.brand}
						</span>
					</div>
				</div>
			</div>
			<div className='cols-span-1 w-full sm:col-span-1 sm:justify-self-center justify-self-start'>
				<div className='uppercase font-bold text-white block sm:hidden'>
					Price
				</div>
				<p className='text-sm'>{formatPrice(item.price)}</p>
			</div>
			<div className='col-span-1 sm:justify-self-center justify-self-start'>
				<div className='uppercase font-bold text-white block sm:hidden'>
					Quantity
				</div>
				<SetQuantity
					cartCounter={true}
					cartProduct={item}
					handleQtyIncrease={() => {
						handleQtyIncrease(item);
					}}
					handleQtyDecrease={() => {
						handleQtyDecrease(item);
					}}
				/>
			</div>
			<div className='col-span-1 sm:justify-self-end font-bold text-[#00ED64] justify-self-start'>
				<div className='uppercase font-bold w-[30%] text-white block sm:hidden'>
					Total
				</div>
				{formatPrice(item.price * item.quantity)}
			</div>
		</div>
	);
};

export default ItemContent;
