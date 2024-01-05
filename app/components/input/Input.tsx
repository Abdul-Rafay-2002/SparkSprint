'use client';

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps {
	id: string;
	label: string;
	type?: string;
	disabled?: boolean;
	required: boolean;
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
	id,
	label,
	type,
	disabled,
	required,
	register,
	errors,
}) => {
	return (
		<div className='w-full relative'>
			<label
				htmlFor={id}
				className={` absolute -top-2 left-0 bg-white font-bold cursor-text text-md duration-150  z-10 origin-[0]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y- peer-focus:scale-75 peer-focus:-translate-y-4 
				${errors[id] ? 'text-rose-700' : 'text-green-800'}`}>
				{label}
			</label>
			<input
				autoComplete='off'
				id={id}
				disabled={disabled}
				{...register(id, { required })}
				placeholder=''
				type={type}
				className={`peer relative w-full p-2 pb-3 pt-5 outline-none text-gray-950 font-light border-2 !rounded transition disabled:opacity-70 disabled:cursor-not-allowed 
                ${errors[id] ? 'border-rose-700' : 'border-green-800'}
                ${errors[id] ? 'focus:border-rose-700' : 'border-green-600'}
				`}
			/>
		</div>
	);
};

export default Input;
