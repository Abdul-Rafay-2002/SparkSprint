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
			className={`flex items-center justify-start gap-2 px-4 py-4 border-b-2 hover:text-slate-900 transition cursor-pointer ${
				selected ? 'bg-black' : 'bg-emerald-700'
			}`}>
			<Icon size={20} />
			<div>{label}</div>
		</div>
	);
};

export default AdminNavItem;
