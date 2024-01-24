'use client';

import { ImageType } from '@/app/admin/add-products/AddProductForm';
import { useCallback, useEffect, useState } from 'react';
import SelectImage from './SelectImage';
import Button from '../Button';

interface SelectColorProps {
	item: ImageType;
	addImageToState: (value: ImageType) => void;
	removeImageFromState: (value: ImageType) => void;
	isProductCreated: boolean;
}

const SelectColor: React.FC<SelectColorProps> = ({
	item,
	addImageToState,
	removeImageFromState,
	isProductCreated,
}) => {
	const [isSelected, setIsSelected] = useState(false);
	const [File, setFile] = useState<File | null>(null);

	useEffect(() => {
		if (isProductCreated) {
			setIsSelected(false);
			setFile(null);
		}
	}, [isProductCreated]);

	const handleFileChange = useCallback((value: File) => {
		setFile(value);
		addImageToState({ ...item, image: value });
	}, []);

	const handleCheck = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setIsSelected(e.target.checked);
		if (!e.target.checked) {
			setFile(null);
			removeImageFromState(item);
		}
	}, []);

	return (
		<div
			className={`grid grid-cols-1 md:grid-cols-1 overflow-y-auto border-b-2 m-2 px-4 shadow-md shadow-black border-green-500 items-center p-2 `}>
			<div className='flex flex-row gap-2 items-center h-[60px]'>
				<input
					id={item.color}
					checked={isSelected}
					onChange={handleCheck}
					type='checkbox'
					className='cursor-pointer w-4 h-4 accent-[#00ED64] rounded focus:ring-[#00ED64] ring-offset-gray-800 focus:ring-2 bg-white border-gray-600'
				/>
				<label className='cursor-pointer' htmlFor={item.color}>
					{item.color}
				</label>
			</div>
			<>
				{isSelected && !File && (
					<div className='col-span-2 items-center'>
						<SelectImage item={item} handleFileChange={handleFileChange} />
					</div>
				)}
				{File && (
					<div className='flex flex-row gap-2 px-1 text-sm col-span-2 items-center justify-between'>
						<p>{File?.name}</p>
						<div className='w-[110px]'>
							<Button
								label='Cancel'
								outline
								custom='!py-[.5rem] !px-3 border-red-700 text-red-700 hover:bg-red-700 hover:text-white text-sm'
								onClick={() => {
									setFile(null);
									removeImageFromState(item);
								}}
							/>
						</div>
					</div>
				)}
			</>
		</div>
	);
};

export default SelectColor;
