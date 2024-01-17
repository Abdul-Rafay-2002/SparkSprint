import CartProvider from '@/providers/CartProvider';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import './globals.css';
import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
	title: 'Spark Sprint',
	description:
		'Explore the future of electronics at SparkSprint your ultimate destination for cutting-edge gadgets, mobile phones, and laptops. Ignite your tech passion with a curated collection of high-performance devices. Shop now for the latest in innovation and stay ahead in the fast-paced world of technology. SparkSprint: Where Every Purchase Ignites Possibilities.',
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	return (
		<html lang='en'>
			<body className='bg-white text-gray-300'>
				<Toaster
					toastOptions={{
						style: {
							background: '#005B41',
							color: '#fafafa'
						},
					}}
				/>
				<CartProvider>
					<div className='flex flex-col min-h-screen'>
						<NavBar />
						<main className='flex flex-grow w-full'>{children}</main>
						<Footer />
					</div>
				</CartProvider>
			</body>
		</html>
	);
}
