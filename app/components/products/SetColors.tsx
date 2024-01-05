'use client';

import {
	CartProductType,
	SelectedImgType,
} from '@/app/product/[productId]/ProductDetails';

interface SetColorProps {
	images: SelectedImgType[];
	cartProduct: CartProductType;
	handleColorSelect: (value: SelectedImgType) => void;
}

const SetColors: React.FC<SetColorProps> = ({
	images,
	cartProduct,
	handleColorSelect,
}) => {
	return (
		<>
			<div className='flex item-center gap-4 sm:mt-1'>
				<span className='text-base font-bold'>Color :</span>
				<div className='flex gap-2'>
					{images.map((image) => (
						<div
							key={image.color}
							onClick={() => handleColorSelect(image)}
							className={`h-8 w-8 sm:w-6 sm:h-6 rounded-full  flex items-center justify-center ${
								cartProduct.selectedImg.color === image.color
									? 'border-[2px] border-[#00ED64] Boxshadow '
									: 'border-[2px] '
							}`}>
							<div
								style={{
									background: image.colorCode,
									boxShadow: `0px 0px 5px 0px ${image.colorCode}`,
								}}
								className='w-full h-full rounded-full cursor-pointer'></div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default SetColors;
