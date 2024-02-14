export const revalidate = 0;
import getProducts, { IProductParams } from '@/actions/getProducts';
import Categories from '../components/Categories';
import Container from '../components/Container';
import ProductCard from '../components/products/ProductCard';
import NullData from '../components/NullData';

interface ProductsProps {
	searchParams: IProductParams;
}

export default async function Products({ searchParams }: ProductsProps) {
	const products = await getProducts(searchParams);
	function shuffleArray(array: any) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	const shuffledProducts = shuffleArray(products);

	return (
		<div className='w-full'>
			<Container>
				<section id='latest-products'>
					<h2 className='text-center mt-14 mb-8 max-[768px]:text-4xl	 text-[#001e2b]'>
						Our Products
					</h2>
					<Categories />
					{shuffledProducts.length === 0 ? (
						<NullData title='Oops! No Product found.' />
					) : (
						<div className='grid max-[500px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-5 mt-20 mb-20'>
							{shuffledProducts.map((product: any) => (
								<ProductCard data={product} key={product.id} />
							))}
						</div>
					)}
				</section>
			</Container>
		</div>
	);
}
