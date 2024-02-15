'use client';

import {
	CartProductType,
	SelectedImgType,
} from '@/app/product/[productId]/ProductDetails';
import Image from 'next/image';

interface ProductImageProps {
	cartProduct: CartProductType;
	product: any;
	handleColorSelect: (value: SelectedImgType) => void;
}

const ProductImage: React.FC<ProductImageProps> = ({
	cartProduct,
	product,
	handleColorSelect,
}) => {
	return (
		<div className='grid grid-cols-6 gap-2 max-h-[600px] min-h-[400px] sm:min-h-[60px]'>
			<div className=' sm:flex flex-col max-w-[100px] hidden items-center justify-start gap-4 cursor-pointer h-full max-h-[550px] min-h-[300px] sm:min-h-[400px]'>
				{product.images.map((image: SelectedImgType) => {
					return (
						<div
							key={image.color}
							onClick={() => handleColorSelect(image)}
							className={`relative max-w-[80px] h-[100px] bg-white aspect-square rounded ${
								cartProduct.selectedImg.color === image.color
									? 'border-[3px] border-green-500'
									: 'border-[3px] border-white'
							}`}>
							<Image
								src={image.image}
								alt={image.color}
								fill
								className='p-0 py-2 object-contain rounded'
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
							/>
						</div>
					);
				})}
			</div>
			<div className='bg-white sm:col-span-5 lg:h-full md:col-span-5 lg:col-span-5 relative min-[360px]:col-span-6 min-[640px]:ml-5 max-[600px]:ml-0 min-[360px]:h-[500px] rounded-xl'>
				<Image
					fill
					className=' py-4 max-w-[600px] mx-auto h-full object-contain max-h-[600px] min-h-[500px] sm:min-h-[400px] sm:h-full min-[360px]:min-h-full'
					src={cartProduct.selectedImg.image}
					alt={cartProduct.name}
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
				/>
			</div>

			{/* for mobile thumbnils */}
			<div className='col-span-6 sm:hidden flex flex-row max-w-full mt-2 items-center justify-start gap-4 cursor-pointer h-full '>
				{product.images.map((image: SelectedImgType) => {
					return (
						<div
							key={image.color}
							onClick={() => handleColorSelect(image)}
							className={`relative max-w-[80px] h-[100px] bg-white aspect-square rounded ${
								cartProduct.selectedImg.color === image.color
									? 'border-[3px] border-green-500'
									: 'border-[3px] border-white'
							}`}>
							<Image
								src={image.image}
								alt={image.color}
								fill
								className='p-0 py-2 object-contain rounded'
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ProductImage;
