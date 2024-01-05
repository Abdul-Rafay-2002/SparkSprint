import Container from '../components/Container';
import CartClient from './CartClient';

const Cart = () => {
	return (
		<div className='py-16 w-full bg-[#001e2b]'>
			<Container>
				<CartClient />
			</Container>
		</div>
	);
};

export default Cart;
