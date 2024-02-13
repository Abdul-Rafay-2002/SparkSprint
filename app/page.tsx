export const revalidate = 0;
import HomeBanner from './components/HomeBanner';
import Container from './components/Container';
import ProductCard from './components/products/ProductCard';
import getProducts, { IProductParams } from '@/actions/getProducts';
import NullData from './components/NullData';
import Categories from './components/Categories';
import CallToAction from './components/CallToAction';
import Counter from './components/Counter';

interface HomeProps {
	searchParams: IProductParams;
}

export default async function Home({ searchParams }: HomeProps) {
	const products = await getProducts(searchParams);
	if (products.length === 0) {
		return (
			<NullData title='Oops! No Product found. Click "ALL" to clear filter  ' />
		);
	}

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
			<section>
				<HomeBanner></HomeBanner>
			</section>
			<section>
				<Container>
					<div className=' flex justify-evenly items-center py-24 max-[768px]:flex-col max-[768px]:gap-16 max-[768px]:py-16'>
						<Counter
							title='Happy Customers'
							initialCount={0}
							finalCount={200}
						/>
						<Counter title='Total Products' initialCount={0} finalCount={10} />
						<Counter
							title='Registered Users'
							initialCount={0}
							finalCount={40}
						/>
						<Counter
							title='Customer Reviews'
							initialCount={0}
							finalCount={110}
						/>
					</div>
				</Container>
			</section>
			<Container>
				<section id='latest-products'>
					<h2 className='text-center mt-14 mb-8 max-[768px]:text-4xl	 text-[#001e2b]'>
						Our Latest Products
					</h2>
					<Categories />
					<div className='grid max-[500px]:grid-cols-1 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-5 mt-20 mb-20'>
						{shuffledProducts.map((product: any) => {
							return <ProductCard data={product} key={product.id} />;
						})}
					</div>
				</section>
			</Container>
			<section>
				<CallToAction />
			</section>
		</div>
	);
}
