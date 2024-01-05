interface HeadingProps{
    title: string;
    center?: boolean;
    customColor?: string;
}

const Heading: React.FC<HeadingProps> = ({ title, center, customColor }) => {
	return (
		<div className={`w-full ${center ? 'text-center' : 'text-left'}`}>
			<h3 className={`${customColor ? customColor : ''} font-bold`}>{title}</h3>
		</div>
	);
};
 
export default Heading;