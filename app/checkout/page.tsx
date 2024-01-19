import FormWrap from '../components/FormWrap';
import CheckoutClient from './CheckoutClient';

const Checkout = () => {
	return (
		<div className='w-full'>
			<FormWrap>
				<CheckoutClient />
			</FormWrap>
		</div>
	);
};

export default Checkout;
