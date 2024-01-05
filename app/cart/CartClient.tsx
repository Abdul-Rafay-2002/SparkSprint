'use client';
import { IoArrowBack } from 'react-icons/io5';
import { useCart } from '@/hooks/UseCart';
import Link from 'next/link';
import Image from 'next/image';
import Heading from '../components/Heading';
import Button from '../components/Button';
import { LuBadgeCheck } from 'react-icons/lu';
import { FaArrowLeft } from 'react-icons/fa6';
import ItemContent from './ItemContent';
import { formatPrice } from '@/utils/FormatPrice';
const CartClient = () => {
	const { cartProducts, HandleClearCart, cartTotalAmount } = useCart();

	if (!cartProducts || cartProducts.length === 0) {
		return (
			<div className='flex items-center justify-center flex-col '>
				<Image
					src='/empty_cart.svg'
					alt='empty cart'
					width={400}
					height={400}
				/>
				<div className='text-2xl my-6 capitalize font-bold'>
					Your Cart is empty
				</div>
				<div>
					<Link href={'/'} className=' !flex btn flex-row gap-3 items-center'>
						<IoArrowBack />
						<span className='font-bold'>Continue Shopping</span>
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div>
			<Heading title='Shopping Cart' center />
			<div className='grid grid-cols-5 text-sm gap-4 pb-2 items-center mt-12'>
				<div className='uppercase font-bold col-span-2 justify-self-start text-white'>
					Product
				</div>
				<div className='uppercase font-bold col-span-1 justify-self-center text-white'>
					Price
				</div>
				<div className='uppercase font-bold col-span-1 justify-self-center text-white'>
					Quantity
				</div>
				<div className='uppercase font-bold col-span-1 justify-self-end text-white'>
					Total
				</div>
			</div>
			<div>
				{cartProducts &&
					cartProducts.map((item) => {
						return <ItemContent key={item.id} item={item} />;
					})}
			</div>
			<div className='border-t-2 border-green-500/20  py-2 flex justify-between gap-4 items-end flex-col'>
				<div>
					<Button
						label='Clear Cart'
						onClick={() => {
							HandleClearCart();
						}}
						small
					/>
				</div>
				<div className='flex flex-col gap-1 items-start bg-[#2945506b] mt-2 p-6 rounded-lg'>
					<div className='flex items-center justify-between mb-2 w-full'>
						<span className='text-2xl font-bold text-[#00ED64]'>Subtotal</span>
						<span className='text-2xl font-bold text-[#00ED64]'>
							{formatPrice(cartTotalAmount)}
						</span>
					</div>
					<p className='text-md text-white/50 font-normal'>
						Taxes and shipping rate will calculate during checkout.
					</p>
					<div className='w-full'>
						<Button
							label='Checkout'
							onClick={() => {}}
							small
							outline
							custom='w-full'
							icon={LuBadgeCheck}
						/>
					</div>
					<div className='w-full mt-6'>
						<Link
							href={'/'}
							className='flex items-center gap-2 justify-center mx-auto'>
							<FaArrowLeft size={18} />
							Continue Shopping
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartClient;
