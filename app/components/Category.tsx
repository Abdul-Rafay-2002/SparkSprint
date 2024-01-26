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
					? 'text-green-500 border-b-green-500 '
					: 'border-transparent text-slate-800'
			} flex items-center justify-center gap-1 border-b-2 py-1   hover:text-green-500 transition-colors cursor-pointer`}>
			<Icon size={20} />
			<h4 className=''>{label}</h4>
		</div>
	);
};

export default Category;
