'use client';

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
interface CommentBoxProps {
	id: string;
	label: string;
	width?: string;
	disabled?: boolean;
	required: boolean;
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors;
}

const CommentBox: React.FC<CommentBoxProps> = ({
	id,
	label,
	disabled,
	required,
	width,
	register,
	errors,
}) => {
	return (
		<div className={`${width} relative mt-2`}>
			<label
				htmlFor={id}
				className={`absolute top-[14px] font-bold rounded-t-lg px-4  z-30 capitalize cursor-text text-md
				${errors[id] ? 'text-rose-700' : 'text-[#00ED64]'}`}>
				{label}
			</label>
			<textarea
				id={id}
				disabled={disabled}
				{...register(id, { required })}
				placeholder=''
				className={`peer relative w-full shadow-lg shadow-gray-950 px-4 pt-[40px] max-h-[200px] min-h-[150px] pb-3 outline-none bg-[#0e2031ad] text-gray-100/80 font-light border-2 !rounded transition disabled:opacity-70 disabled:cursor-not-allowed 
                ${errors[id] ? 'border-rose-700' : 'border-[#00ED64]'}
                ${errors[id] ? 'focus:border-rose-700' : 'border-[#00ED64]'}
				`}
			/>
		</div>
	);
};

export default CommentBox;
