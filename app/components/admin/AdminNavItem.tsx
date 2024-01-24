import { IconType } from 'react-icons';

interface AdminNavItemProps {
	selected: boolean;
	icon: IconType;
	label: string;
}

const AdminNavItem: React.FC<AdminNavItemProps> = ({
	selected,
	icon: Icon,
	label,
}) => {
	return (
		<div
			className={`flex items-center justify-start gap-2 px-4 py-6 rounded-md mb-2 border-b-2 hover:text-[#00ED64] transition-colors cursor-pointer ${
				selected
					? 'bg-[#001e2b] border-[#00ED64] text-[#00ED64]'
					: 'border-[#001e2b] bg-[#001e2b]'
			}`}>
			<Icon size={20} />
			<div>{label}</div>
		</div>
	);
};

export default AdminNavItem;
