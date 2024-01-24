'use client';

import { IconType } from 'react-icons';

interface CategoryTabProps {
	selected: Boolean;
	label: string;
	icon: IconType;
	onClick: (value: string) => void;
}

const CategoryTab: React.FC<CategoryTabProps> = ({
	selected,
	label,
	icon: Icon,
	onClick,
}) => {
	return (
		<div
			className={`rounded-md border-2 py-8 mx-2 text-center my-3 px-3 flex flex-col items-center gap-2  hover:border-[#00ED64] transition-colors cursor-pointer 
            ${
							selected
								? 'border-[#00ED64] Boxshadow'
								: 'shadow-md shadow-gray-950 border-gray-700'
						}`}
			onClick={() => {
				onClick(label);
			}}>
			<Icon size={30} />
			<div className='font-semibold'>{label}</div>
		</div>
	);
};

export default CategoryTab;
