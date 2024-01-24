interface NullDataProps {
	title: string;
}

const NullData: React.FC<NullDataProps> = ({ title }) => {
	return (
		<div className='w-full h-[50vh] flex items-center justify-center'>
			<p className='font-semibold text-red-700 text-xl md:text-2xl'>
				{title}
			</p>
		</div>
	);
};

export default NullData;
