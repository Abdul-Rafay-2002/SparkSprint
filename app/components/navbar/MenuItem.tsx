interface MenuItemProps {
	children: React.ReactNode;
	onClick: () => void;
	customClass?: String;
}

const MenuItem: React.FC<MenuItemProps> = ({
	children,
	onClick,
	customClass,
}) => {
	return (
		<div onClick={onClick} className={`py-2 ${customClass}`}>
			{children}
		</div>
	);
};

export default MenuItem;
