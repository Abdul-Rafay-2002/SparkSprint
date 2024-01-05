'use client';

import { CartProductType } from '@/app/product/[productId]/ProductDetails';

interface SetQtyProps {
	cartCounter?: boolean;
	cartProduct: CartProductType;
	handleQtyIncrease: () => void;
	handleQtyDecrease: () => void;
}

const QtybtnStyle =
	'border-r-[2px] border-l-[2px] border-slate-500 text-slate-500 px-2 text-lg w-8 h-8';

const SetQuantity: React.FC<SetQtyProps> = ({
	cartProduct,
	cartCounter,
	handleQtyIncrease,
	handleQtyDecrease,
}) => {
	return (
		<div className='flex gap-8 items-center mt-4'>
			{cartCounter ? null : (
				<div className='text-base font-bold'>Quantity : </div>
			)}
			<div className='flex items-center gap-4 text-base border-slate-500 border-t-[2px] rounded border-b-[2px]'>
				<button onClick={handleQtyDecrease} className={QtybtnStyle}>
					-
				</button>
				<div className='px-2'>{cartProduct.quantity}</div>
				<button onClick={handleQtyIncrease} className={QtybtnStyle}>
					+
				</button>
			</div>
		</div>
	);
};

export default SetQuantity;
