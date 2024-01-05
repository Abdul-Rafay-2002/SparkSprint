import ProductDetails from './ProductDetails';
import Container from '@/app/components/Container';
import ListRating from './ListRating';

import { products } from '@/utils/Products';

interface IPrams {
	productId?: string;
}

const ProductDetail = ({ params }: { params: IPrams }) => {
	const product = products.find((item) => item.id === params.productId )
	return (
		<div className='p-2 bg-[#092635] w-full md:py-10'>
			<Container>
				<ProductDetails product={product} />
				<div className='flex flex-col mt-20 gap-4 '>
					<div>Add Rating</div>
					<ListRating product={product} />
				</div>
			</Container>
		</div>
	);
};

export default ProductDetail;
