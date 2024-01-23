'use client';

import { useCart } from '@/hooks/UseCart';
import { Elements } from '@stripe/react-stripe-js';
import { StripeElementsOptions, loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import CheckoutForm from './CheckoutForm';
import Button from '../components/Button';

const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

const CheckoutClient = () => {
	const { cartProducts, paymentIntent, handleSetPaymentIntent } = useCart();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [clientSecret, setClientSecret] = useState('');
	const [paymentSuccess, setPaymentSuccess] = useState(false);
	const router = useRouter();

	// console.log('payment Intent', paymentIntent);
	// console.log('clientSecret', clientSecret);
	useEffect(() => {
		//create a paymentIntent as soon as the page loads.
		if (cartProducts) {
			setLoading(true);
			setError(false);
			fetch('/api/create-payment-intent/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					items: cartProducts,
					payment_intent_id: paymentIntent,
				}),
			})
				.then((res) => {
					setLoading(false);
					if (res.status === 401) {
						return router.push('/login');
					}
					return res.json();
				})
				.then((data) => {
					setClientSecret(data.paymentIntent.client_secret);
					handleSetPaymentIntent(data.paymentIntent.id);
				})
				.catch((error) => {
					setError(true);
					console.log('Error', error);
					toast.error('Something went wrong!');
				});
		}
	}, [cartProducts, paymentIntent]);

	const options: StripeElementsOptions = {
		clientSecret,
		appearance: {
			theme: "stripe",
			labels: 'floating',
		},
	};
	const handlePaymentSuccess = useCallback((value: boolean) => {
		setPaymentSuccess(value);
	}, []);

	return (
		<div className='w-full'>
			{clientSecret && cartProducts && (
				<Elements options={options} stripe={stripePromise}>
					<CheckoutForm
						clientSecret={clientSecret}
						handlePaymentSuccess={handlePaymentSuccess}
					/>
				</Elements>
			)}
			{loading && (
				<div className='text-center text-gray-800'>Loading Checkout...</div>
			)}
			{error && (
				<div className='text-center text-red-700'>Something went wrong...</div>
			)}
			{paymentSuccess && (
				<div className='flex items-center flex-col gap-4'>
					<div className='text-center text-emerald-600'>Payment Success...</div>
					<div>
						<Button
							label='view your order'
							onClick={() => router.push('/order')}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default CheckoutClient;
