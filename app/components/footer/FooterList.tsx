interface FooterListProps {
	children: React.ReactNode;
}

const FooterList: React.FC<FooterListProps> = ({ children }) => {
	return <div className='flex flex-col gap-3 mb-8'>{children}</div>;
};

export default FooterList;
