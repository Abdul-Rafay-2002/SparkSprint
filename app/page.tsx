export const revalidate = 0;
import HomeBanner from './components/HomeBanner';
import Container from './components/Container';
import ProductCard from './components/products/ProductCard';
import getProducts, { IProductParams } from '@/actions/getProducts';
import NullData from './components/NullData';
import Categories from './components/Categories';

interface HomeProps {
	searchParams: IProductParams;
}

export default async function Home({ searchParams }: HomeProps) {
	const products = await getProducts(searchParams);
	if (products.length === 0){
		return <NullData title='Oops! No Product found. Click "ALL" to clear filter  ' />
	}

	function shuffleArray(array: any){
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i+1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	const shuffledProducts = shuffleArray(products);


		return (
			<div className='w-full'>
				<section>
					<HomeBanner></HomeBanner>
				</section>
				<Container>
					<section id='latest-products'>
						<h2 className='text-center mt-14 mb-8	 text-[#001e2b]'>
							Our Latest Products
						</h2>
						<Categories />
						<div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-5 mt-20 mb-20'>
							{shuffledProducts.map((product: any) => {
								return <ProductCard data={product} key={product.id} />;
							})}
						</div>
					</section>
				</Container>
			</div>
		);
}
