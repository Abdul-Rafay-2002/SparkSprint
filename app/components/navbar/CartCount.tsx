'use client';
import { useCart } from '@/hooks/UseCart';
import { useRouter } from 'next/navigation';
import { FaShoppingBag } from 'react-icons/fa';

const CartCount = () => {
	const { cartTotalQty } = useCart();
	const router = useRouter();
	return (
		<div className='relative' onClick={() => router.push('/cart')}>
			<div className='absolute bg-green-950 border-2 border-[#00ED64]   max-[500px]:w-4 max-[500px]:h-4 max-[500px]:p-1.5 max-[500px]:text-[10px]  p-2 w-6 h-6 text-xs flex items-center justify-center rounded-full -right-[8px] -top-[7px] text-white'>
				{cartTotalQty}
			</div>
			<div className='bg-[#ffffff1a] flex w-12 h-12 justify-center items-center rounded-full cursor-pointer   max-[500px]:w-8 max-[500px]:h-8'>
				<FaShoppingBag size={22} color='#fff' className='max-[500px]:w-4' />
			</div>
		</div>
	);
};

export default CartCount;
