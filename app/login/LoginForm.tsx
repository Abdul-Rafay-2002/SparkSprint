'use client';

import { useState } from 'react';
import Heading from '../components/Heading';
import Input from '../components/input/Input';
import { FcGoogle } from 'react-icons/fc';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Button from '../components/Button';
import Link from 'next/link';

const LoginForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {

			email: '',
			password: '',
		},
	});
	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);
		console.log(data);
	};
	return (
		<>
			<Heading
				title='Login for SparkSprint'
				customColor='text-[#001e2b] font-extrabold text-3xl uppercase mt-4'
				center
			/>
			<p className=' text-gray-800 -my-5 '>
				Please login to purchased the products!
			</p>
			<Button
				label='Countinue with google'
				custom='w-full capitalize  !rounded-full text-black hover:bg-[#00ED64]'
				outline
				onClick={() => {}}
				icon={FcGoogle}
			/>
			<div className='flex items-center gap-1 w-full justify-center'>
				<span className='w-8 h-[1px] bg-gray-600'></span>
				<span className='text-gray-800 '>OR</span>
				<span className='w-8 h-[1px] bg-gray-600'></span>
			</div>

			<Input
				id='email'
				label='Email'
				disabled={isLoading}
				register={register}
				errors={errors}
				required
				type='email'
			/>
			<Input
				id='password'
				label='Password'
				disabled={isLoading}
				register={register}
				errors={errors}
				required
				type='password'
			/>
			<Button
				label={isLoading ? 'Loading...' : 'Log in'}
				onClick={handleSubmit(onSubmit)}
				custom='w-full hover:text-black bg-emerald-200 hover:bg-[#00ED64]'
			/>

			<p className='text-gray-600'>
				Do not have an account?{' '}
				<Link href='/register' className='underline font-bold text-emerald-500'>
					Register Now
				</Link>
			</p>
		</>
	);
};

export default LoginForm;
