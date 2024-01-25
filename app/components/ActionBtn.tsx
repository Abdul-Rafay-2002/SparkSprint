import { IconType } from 'react-icons';

interface ActionBtnProps {
	icon: IconType;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	disabled?: boolean;
}

const ActionBtn: React.FC<ActionBtnProps> = ({
	icon: Icon,
	onClick,
	disabled,
}) => {
	return (
		<button
			className={`${
				disabled && 'opacity-50 cursor-not-allowed'
			} p-2 bg-gray-900/60 border-2 border-slate-950 rounded-full`}
			disabled={disabled}
			onClick={onClick}>
			<Icon size={20} />
		</button>
	);
};

export default ActionBtn;
