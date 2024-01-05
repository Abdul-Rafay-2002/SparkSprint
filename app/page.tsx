import { products } from '@/utils/Products';
import HomeBanner from './components/HomeBanner';
import Container from './components/Container';
import { truncateText } from '@/utils/truncateText';
import Image from 'next/image';
import ProductCard from './components/products/ProductCard';
export default function Home() {
	return (
		<div className='w-full'>
			<section>
				<HomeBanner></HomeBanner>
			</section>
			<Container>
				<section>
					<h2 className='text-center mt-14 text-[#001e2b]'>
						Our Latest Products
					</h2>
					<div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-5 mt-20 mb-20'>
						{products.map((product: any) => {
							return <ProductCard data={product} key={product.id} />;
						})}
					</div>
				</section>
			</Container>
		</div>
	);
}
