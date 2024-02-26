'use client';
import { categories } from '@/utils/Categories';
import Container from './Container';
import Category from './Category';
import { usePathname, useSearchParams } from 'next/navigation';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SettingsProps {
	dots: boolean;
	fade: boolean;
	infinite: boolean;

	slidesToShow: number;
	arrows: boolean;
	slidesToScroll: number;
	loop: boolean;
	cssEase: string;
	draggable: boolean;
	responsive: { breakpoint: number; settings: Partial<SettingsProps> }[]; // Responsive settings
}

const Categories = () => {
	const settings: SettingsProps = {
		dots: false,
		fade: false,
		infinite: true,
		loop: true,
		arrows: true,

		slidesToShow: 8,
		slidesToScroll: 1,
		cssEase: 'linear',
		draggable: false,
		responsive: [
			{
				breakpoint: 1024, // Breakpoint for larger screens
				settings: {
					slidesToShow: 6, // Adjust number of slides to show for larger screens
				},
			},
			{
				breakpoint: 768, // Breakpoint for medium screens
				settings: {
					slidesToShow: 3, // Adjust number of slides to show for medium screens
				},
			},
			{
				breakpoint: 480, // Breakpoint for smaller screens
				settings: {
					slidesToShow: 1, // Adjust number of slides to show for smaller screens
				},
			},
		],
	};

	const params = useSearchParams();
	const category = params?.get('category');
	const pathName = usePathname();
	const isMainPage = pathName === '/';
	const isProductPage = pathName === '/products';
	if (!isMainPage && !isProductPage) {
		return null;
	}

	return (
		<div className='categories flex justify-center items-center gap-2 max-[768px]:justify-start  flex-wrap'>
			<Slider {...settings} className='lg:w-[100%] w-[100%] h-full'>
				{categories.map((item) => (
					<Category
						key={item.label}
						label={item.label}
						icon={item.icon}
						selected={
							category === item.label ||
							(category === null && item.label === 'All')
						}
					/>
				))}
			</Slider>
		</div>
	);
};

export default Categories;
