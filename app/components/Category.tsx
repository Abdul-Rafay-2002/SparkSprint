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
					url: '#latest-products/',
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
					? 'text-black border-black bg-[#00ED64] hover:text-slate-900'
					: 'border-transparent text-black  hover:border-black hover:bg-[#00ED64] hover:text-black'
			} flex items-center  max-[768px]:w-[48%] max-[500px]:w-[100%] max-[500px]:justify-start justify-center max-[500px]:rounded-md gap-1 border-2 py-2 px-4 rounded-full transition-colors cursor-pointer`}>
			<Icon size={20} />
			<h4 className=''>{label}</h4>
		</div>
	);
};

export default Category;
