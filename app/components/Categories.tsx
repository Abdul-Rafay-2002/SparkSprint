'use client'
import { categories } from '@/utils/Categories';
import Container from './Container';
import Category from './Category';
import { usePathname, useSearchParams } from 'next/navigation';

interface CategoriesProps {}

const Categories: React.FC<CategoriesProps> = () => {
	const params = useSearchParams();
	const category = params?.get('category');
    const pathName = usePathname();
    const isMainPage = pathName === '/'
    if(!isMainPage){
        return null
    }

	return (
		<div>
			<Container>
				<div className='flex justify-center items-center gap-10'>
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
				</div>
			</Container>
		</div>
	);
};

export default Categories;
