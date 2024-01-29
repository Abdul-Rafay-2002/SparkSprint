import { useRouter, useSearchParams } from 'next/navigation';
import queryString from 'query-string';
import { useCallback } from 'react';
import { IconType } from 'react-icons';

interface CategoryProps {
	label: string;
	icon: IconType;
	selected?: boolean;
}

const Category: React.FC<CategoryProps> = ({ label, icon: Icon, selected }) => {
	const router = useRouter();
	const params = useSearchParams();
	const handleClick = useCallback(() => {
		if (label === 'All') {
			router.push('/');
		} else {
			let currentQuery = {};
			if (params) {
				currentQuery = queryString.parse(params.toString());
			}
			const updatedQuery: any = { ...currentQuery, category: label };
			const URL = queryString.stringifyUrl(
				{
					url: '/',
					query: updatedQuery,
				},
				{ skipNull: true }
			);
			router.push(URL);
		}
	}, [label, params, router]);

	return (
		<div
			onClick={handleClick}
			className={`${
				selected
					? 'text-slate-800 border-slate-800 bg-[#001e2b2d] hover:text-slate-900'
					: 'border-transparent text-slate-800  hover:border-slate-800 hover:bg-[#001e2b2d] hover:text-slate-900'
			} flex items-center max-w-[200px] justify-center gap-1 border-2 py-2 px-4 rounded-full   hover:text-green-500 transition-colors cursor-pointer`}>
			<Icon size={20} />
			<h4 className=''>{label}</h4>
		</div>
	);
};

export default Category;
