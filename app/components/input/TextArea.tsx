'use client';

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
interface TextAreaProps {
	id: string;
	label: string;
	width?: string;
	disabled?: boolean;
	required: boolean;
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors;
}

const TextArea: React.FC<TextAreaProps> = ({
	id,
	label,
	disabled,
	required,
	width,
	register,
	errors,
}) => {
	return (
		<div className={`${width} relative mt-8`}>
			<label
				htmlFor={id}
				className={`absolute bg-[#00ED64] font-bold rounded-t-lg px-6 -top-[1.38rem] z-30 capitalize cursor-text text-md
				${errors[id] ? 'bg-rose-700' : 'text-slate-950'}`}>
				{label}
			</label>
			<textarea
				id={id}
				disabled={disabled}
				{...register(id, { required })}
				placeholder=''
				className={`peer relative w-full shadow-lg shadow-gray-950 p-2 max-h-[150px] min-h-[150px] pb-3 pt-3 outline-none bg-[#0e2031ad] text-gray-100/80 font-light border-2 !rounded transition disabled:opacity-70 disabled:cursor-not-allowed 
                ${errors[id] ? 'border-rose-700' : 'border-[#00ED64]'}
                ${errors[id] ? 'focus:border-rose-700' : 'border-[#00ED64]'}
				`}
			/>
		</div>
	);
};

export default TextArea;
