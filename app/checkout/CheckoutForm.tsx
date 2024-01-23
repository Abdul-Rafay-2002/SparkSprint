'use client';

import { useCart } from '@/hooks/UseCart';
import { formatPrice } from '@/utils/FormatPrice';
import {
	AddressElement,
	PaymentElement,
	useElements,
	useStripe,
} from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Heading from '../components/Heading';
import Button from '../components/Button';

interface CheckoutFormProps {
	clientSecret: string;
	handlePaymentSuccess: (value: boolean) => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
	clientSecret,
	handlePaymentSuccess,
}) => {
	const { cartTotalAmount, HandleClearCart, handleSetPaymentIntent } =
		useCart();
	const stripe = useStripe();
	const elements = useElements();
	const [isLoading, setIsLoading] = useState(false);
	const formattedPrice = formatPrice(cartTotalAmount);

	useEffect(() => {
		if (!stripe) {
			return;
		}
		if (!clientSecret) {
			return;
		}
		handlePaymentSuccess(false);
	}, [stripe]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		setIsLoading(true);
		stripe
			.confirmPayment({
				elements,
				redirect: 'if_required',
			})
			.then((result) => {
				if (result.error) {
					toast.success('Payment Success!');
					HandleClearCart();
					handlePaymentSuccess(true);
					handleSetPaymentIntent(null);
				}
				setIsLoading(false);
			});
	};

	return (
		<form onSubmit={handleSubmit} id='payment-form'>
			<div className='mb-6'>
				<Heading
					title='Checkout Information'
					customColor='text-gray-900'
					center
				/>
				<p className='text-gray-900/70 font-semibold mt-1 mb-6 text-center'>
					Enter your card details to completed the Checkout.
				</p>

				<h2 className='text-gray-800 text-base font-bold mb-2'>
					Address Information
				</h2>
				<AddressElement
					options={{ mode: 'shipping', allowedCountries: ['US', 'PK'] }}
				/>
				<h2 className='text-gray-800 text-base font-bold mt-4 mb-2'>
					Payment Details
				</h2>
				<PaymentElement id='payment-element' options={{ layout: 'tabs' }} />
				<div className='text-gray-900 font-bold text-base mt-4'>
					Total Amount: {formattedPrice}
				</div>
				<Button
					label={isLoading ? 'Processing' : 'Pay Now'}
					disabled={isLoading || !stripe || !elements}
					onClick={() => {}}
					custom='w-full text-gray-950'
					small
					outline
				/>
			</div>
		</form>
	);
};

export default CheckoutForm;
