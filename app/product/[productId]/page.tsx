import ProductDetails from './ProductDetails';
import Container from '@/app/components/Container';
import ListRating from './ListRating';
import { getProductById } from '@/actions/getProductById';
import NullData from '@/app/components/NullData';
import AddRating from './AddRating';
import { getCurrentUser } from '@/actions/getCurrentUser';

interface IPrams {
	productId?: string;
}

const ProductDetail = async ({ params }: { params: IPrams }) => {
	
	const product = await getProductById(params);
	const user = await getCurrentUser();
	if (!product) {
		return <NullData title='Oops! This Product does not exist.' />;
	}
	return (
		<div className='p-2 bg-[#092635] w-full md:py-10'>
			<Container>
				<ProductDetails product={product} />
				<div className='flex flex-col mt-20 gap-4 max-w-[550px] '>
					<AddRating product={product} user={user}/>
					<ListRating product={product} />
				</div>
			</Container>
		</div>
	);
};

export default ProductDetail;
