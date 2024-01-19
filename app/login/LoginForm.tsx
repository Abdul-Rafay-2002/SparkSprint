'use client';

import { useEffect, useState } from 'react';
import Heading from '../components/Heading';
import Input from '../components/input/Input';
import { FcGoogle } from 'react-icons/fc';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Button from '../components/Button';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { SafeUser } from '@/types';

interface LoginFormProps {
	currentUser: SafeUser | null;
}

const LoginForm: React.FC<LoginFormProps> = ({ currentUser }) => {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
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

	useEffect(() => {
		if(currentUser){
			router.push('/');
			router.refresh();
			toast.success("You're already logged in..");
		}
	}, []);

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);
		signIn('credentials', {
			...data,
			redirect: false,
		}).then((callback) => {
			setIsLoading(false);

			if (callback?.ok) {
				router.push('/cart/');
				router.refresh();
				toast.success('Logged In Successfully!');
			}
			if (callback?.error) {
				toast.error(callback?.error);
			}
		});
	};

	if (currentUser) {
		return <p className='text-center text-black'>Logged In, Redirecting...</p>;
	}
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
				custom='w-full capitalize !rounded-full text-black hover:bg-[#00ED64] '
				outline
				onClick={() => {signIn('google')}}
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
