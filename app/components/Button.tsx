'use client';

import { IconType } from 'react-icons';

interface ButtonProps {
	label: string;
	disabled?: boolean;
	outline?: boolean;
	small?: boolean;
	custom?: string;
	icon?: IconType;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
	label,
	disabled,
	outline,
	small,
	custom,
	icon: Icon,
	onClick,
}) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`disabled:opacity-60 disabled:cursor-not-allowed  rounded-md transiton mt-4 font-bold border-2 uppercase border-[#00ED64] transition-colors flex items-center justify-center gap-2 
            ${
							outline
								? 'transparent text-[#00ED64]  hover:bg-[#00ED64] hover:text-black'
								: 'bg-[#00ED64] hover:text-[#00ED64] hover:bg-transparent text-black'
						} 
            ${small ? 'text-sm w-40 py-4 px-3' : 'text-md py-4 px-5'}
            ${custom ? custom : ''}
            `}>
			{Icon && <Icon size={20} />}
			{label}
		</button>
	);
};

export default Button;
