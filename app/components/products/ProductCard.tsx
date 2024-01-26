'use client';

import { formatPrice } from '@/utils/FormatPrice';
import { truncateText } from '@/utils/truncateText';
import { Rating } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
	data: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
	const router = useRouter();
	const productRating =
		data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
		data.reviews.length;
	return (
		<div
			onClick={() => router.push(`/product/${data.id}`)}
			className='col-span-1 cursor-pointer border-2 border-green-300/50 rounded-md bg-[#001e2b] px-4 py-6 shadow-lime-500 shadow-sm transition hover:scale-105 text-center text-md'>
			<div className='flex flex-col items-center w-full gap-1 '>
				<div className='aspect-square overflow-hidden relative w-full'>
					<Image
						src={data.images[0].image}
						className='w-full h-full  object-contain bg-blend-multiply filter '
						alt={data.name}
						fill
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					/>
				</div>
				<div>
					<h4 className='capitalize text-lg text-white mt-6'>
						{truncateText(data.name)}
					</h4>
				</div>
				<div className='flex flex-col items-center'>
					<Rating size='large' value={productRating} readOnly />
					<div className='text-sm'>{data.reviews.length} reviews</div>
				</div>
				<div>
					<p className='text-sm font-bold text-white-300/80'>
						{formatPrice(data.price)}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
