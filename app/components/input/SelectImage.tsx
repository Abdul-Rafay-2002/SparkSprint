'use client';

import { ImageType } from '@/app/admin/add-products/AddProductForm';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

interface SelectImageProps {
	item?: ImageType;
	handleFileChange: (value: File) => void;
}

const SelectImage: React.FC<SelectImageProps> = ({
	item,
	handleFileChange,
}) => {
	const onDrop = useCallback((acceptedFiles: File[]) => {
		if (acceptedFiles.length > 0) {
			handleFileChange(acceptedFiles[0]);
		}
	}, []);
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: { 'image/*': ['.jpeg', '.png', '.jpg'] },
	});
	return (
		<div
			{...getRootProps()}
			className={` border-2 border-[#00ED64] px-2 py-4 border-dashed cursor-pointer text-sm font-normal text-slate-900 flex items-center justify-center`}>
			<input {...getInputProps()} />
			{isDragActive ? <p className='text-slate-500'>Drop the Image here!</p> : <p className='text-slate-500'>+{item?.color} Image</p>}
		</div>
	);
};

export default SelectImage;
