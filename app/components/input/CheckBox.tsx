'use client';

import { FieldValues, UseFormRegister } from 'react-hook-form';

interface CheckBoxProps {
	id: string;
	label: string;
	width?: string;
	disabled?: boolean;
	register: UseFormRegister<FieldValues>;
}
const CheckBox: React.FC<CheckBoxProps> = ({
	id,
	label,
	disabled,
	register,
	width,
}) => {
	return (
		<div
			className={`${width} flex items-center p-4 border rounded border-gray-700 gap-4 shadow-md shadow-gray-950`}>
			<input
				id={id}
				disabled={disabled}
				{...register(id)}
				placeholder=''
				className={` cursor-pointer w-4 h-4 accent-[#00ED64] rounded focus:ring-[#00ED64] ring-offset-gray-800 focus:ring-2 bg-white border-gray-600 `}
				type='checkbox'
			/>
			<label htmlFor={id} className='cursor-pointer font-semibold'>
				{label}
			</label>
		</div>
	);
};

export default CheckBox;
