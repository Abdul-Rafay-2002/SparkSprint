'use client';
import { useCart } from '@/hooks/UseCart';
import { useRouter } from 'next/navigation';
import { FaShoppingBag } from 'react-icons/fa';

const CartCount = () => {
	const { cartTotalQty } = useCart();
	const router = useRouter();
	return (
		<div className='relative' onClick={() => router.push("/cart")}>
			<div className='absolute bg-green-950 border-2 border-[#00ED64] p-2 w-6 h-6 text-xs flex items-center justify-center rounded-full -right-[8px] -top-[7px] text-white'>
				{cartTotalQty}
			</div>
			<div className='bg-[#ffffff1a] flex w-12 h-12 justify-center items-center rounded-full cursor-pointer'>
				<FaShoppingBag size={22} color='#fff' />
			</div>	
		</div>
	);
};

export default CartCount;
