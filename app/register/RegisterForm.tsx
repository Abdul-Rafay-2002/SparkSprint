'use client';

import { useState } from 'react';
import Heading from '../components/Heading';
import Input from '../components/input/Input';
import { FcGoogle } from 'react-icons/fc';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Button from '../components/Button';
import Link from 'next/link';
import axios from 'axios';
import toast from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
	});
	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);
		axios
			.post('/api/register', data)
			.then(() => {
				toast.success('Account Created!');
				signIn('credentials', {
					email: data.email,
					password: data.password,
					redirect: false,
				}).then((callback) => {
					if (callback?.ok) {
						router.push('/cart/');
						router.refresh();
						toast.success('Logged In Successfully!');
					}
					if (callback?.error) {
						toast.error(callback?.error);
					}
				});
			})
			.catch(() => {
				toast.error('Something went Wrong!');
			})
			.finally(() => {
				setIsLoading(false);
			});
	};
	return (
		<>
			<Heading
				title='Sign up for SparkSprint'
				customColor='text-[#001e2b] font-extrabold text-3xl uppercase mt-4'
				center
			/>
			<p className=' text-gray-800 -my-5 '>
				Please signup for purchased the products!
			</p>
			<Button
				label='sign in with google'
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
				id='name'
				label='Name'
				disabled={isLoading}
				register={register}
				errors={errors}
				required
				type='text'
			/>
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
				label={isLoading ? 'Loading...' : 'Sign Up'}
				onClick={handleSubmit(onSubmit)}
				custom='w-full hover:text-black bg-emerald-200 hover:bg-[#00ED64]'
			/>

			<p className='text-gray-600'>
				Already have an account?{' '}
				<Link href='/login' className='underline font-bold text-emerald-500'>
					Log In
				</Link>
			</p>
		</>
	);
};

export default RegisterForm;
