import { IconType } from 'react-icons';

interface StatusProps {
	text: string;
	icon: IconType;
	bg: string;
	color: string;
}

const Status: React.FC<StatusProps> = ({ text, icon: Icon, bg, color }) => {
	return (
		<div className={`${bg} ${color} px-2 py-1 rounded flex items-center gap-1`}>
			<Icon size={20} />
			{text}
		</div>
	);
};

export default Status;
