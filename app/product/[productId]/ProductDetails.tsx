'use client';

import Button from '@/app/components/Button';
import ProductImage from '@/app/components/products/ProductImage';
import SetColors from '@/app/components/products/SetColors';
import SetQuantity from '@/app/components/products/SetQuantity';
import { useCart } from '@/hooks/UseCart';
import { formatPrice } from '@/utils/FormatPrice';
import { Rating } from '@mui/material';
import Link from 'next/link';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { useCallback, useEffect, useState } from 'react';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { useRouter } from 'next/navigation';

interface ProductDetailsProps {
	product: any;
}
export type CartProductType = {
	id: string;
	name: string;
	description: string;
	category: string;
	brand: string;
	selectedImg: SelectedImgType;
	quantity: number;
	price: number;
};

export type SelectedImgType = {
	color: string;
	colorCode: string;
	image: string;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
	const { handleAddProductToCart, cartProducts } = useCart();
	const [isProductInCart, setIsProductInCart] = useState(false);
	const [cartProduct, setCartProduct] = useState<CartProductType>({
		id: product.id,
		name: product.name,
		description: product.description,
		category: product.category,
		brand: product.brand,
		selectedImg: { ...product.images[0] },
		quantity: 1,
		price: product.price,
	});
	const router = useRouter();

	useEffect(() => {
		setIsProductInCart(false);
		if (cartProducts) {
			const existingIndex = cartProducts.findIndex(
				(item) => item.id === product.id
			);
			if (existingIndex > -1) {
				setIsProductInCart(true);
			}
		}
	}, [cartProducts]);

	const productRating =
		product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
		product.reviews.length;

	const handleColorSelect = useCallback(
		(value: SelectedImgType) => {
			setCartProduct((prev) => {
				return { ...prev, selectedImg: value };
			});
		},
		[cartProduct.selectedImg]
	);

	const handleQtyIncrease = useCallback(() => {
		if (cartProduct.quantity === 100) {
			return ;
		}
		setCartProduct((prev) => {
			return { ...prev, quantity: ++prev.quantity };
		});
	}, [cartProduct]);

	const handleQtyDecrease = useCallback(() => {
		if (cartProduct.quantity === 1) {
			return;
		}
		setCartProduct((prev) => {
			return { ...prev, quantity: --prev.quantity };
		});
	}, [cartProduct]);

	return (
		<div className='grid grid-cols-13 xl:grid-cols-2 md:grid-cols-2 gap-12 lg:gap-8 md:gap-4'>
			<ProductImage
				cartProduct={cartProduct}
				product={product}
				handleColorSelect={handleColorSelect}
			/>
			<div className='flex flex-col gap-1'>
				<p className='flex gap-2'>
					<span className='text-sm'>
						<Link href='/' className='text-sm text-green-500 underline'>
							Home
						</Link>
					</span>
					/
					<span className='text-sm'>
						<Link href='#' className='text-sm'>
							Product
						</Link>
					</span>
					/ <span className='text-sm'>{product.name}</span>
				</p>
				<h3 className='text-gray-100'>{product.name}</h3>
				<p className='font-bold text-xl my-3 text-slate-200/60'>
					{formatPrice(product.price)}
				</p>
				<div className='flex items-center gap-2 mb-4 -mt-2'>
					<Rating value={productRating} size='large' name='size-large' />
					<div className='text-xs text-slate-400 font-bold'>
						({productRating} {productRating <= 1  ? "Star" : "Stars"} )
					</div>
				</div>
				<p className='text-justify'>{product.description}</p>
				<div className='my-3 pt-3 flex flex-col lg:flex-row lg:gap-2 gap-4 justify-between'>
					<h5 className='flex gap-2 text-slate-100/80'>
						Category : <p className='text-slate-100/50'>{product.category}</p>
					</h5>
					<h5 className='flex gap-2 text-slate-100/80'>
						Brand : <p className='text-slate-100/50'>{product.brand}</p>
					</h5>
					<h5
						className={
							product.inStock
								? 'text-sm bg-[#00ED64] text-black py-1 px-2 rounded-lg shadow-lg shadow-lime-950 inline lg:w-18 sm:w-[71px] min-[360px]:w-[71px]'
								: 'text-sm bg-red-700 text-white py-1 px-2 pb-2 rounded-lg shadow-lg shadow-red-950 inline min-[360px]:w-[101px]'
						}>
						{product.inStock ? 'In Stock' : 'Out of Stock'}
					</h5>
				</div>
				{isProductInCart ? (
					<>
						<p className=' mt-7 mb-8 flex gap-2 items-center font-bold justify-center text-slate-100'>
							<IoIosCheckmarkCircle size={24} className='text-[#00ED64]' />
							Product Added to the Cart
						</p>
						<Button
							label={'View Cart'}
							disabled={false}
							onClick={() => router.push('/cart/')}
							icon={BsFillCartCheckFill}
						/>
					</>
				) : (
					<>
						<SetColors
							cartProduct={cartProduct}
							images={product.images}
							handleColorSelect={handleColorSelect}
						/>
						<SetQuantity
							cartProduct={cartProduct}
							handleQtyIncrease={handleQtyIncrease}
							handleQtyDecrease={handleQtyDecrease}
						/>
						<Button
							label={'Add to Cart'}
							disabled={false}
							onClick={() => handleAddProductToCart(cartProduct)}
						/>
					</>
				)}
			</div>
		</div>
	);
};

export default ProductDetails;
