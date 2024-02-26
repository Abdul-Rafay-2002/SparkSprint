import Image from 'next/image';

const FormWrap = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='min-h-fit h-full flex item-center lg:items-center gap-5 lg:justify-between justify-center '>
			<div className=' max-w-[100%] lg:max-w-[50%] 2xl:ml-auto glassphormism !bg-white w-[550px] max-[450px]:ml-2 max-[450px]:mr-2 my-20 lg:mt-20 ml-10 mr-10 flex flex-col gap-6 items-center  rounded-md p-4 md:p-8'>
				{children}
			</div>
			<div className='max-w-[50%] w-full !min-h-fit h-full p-20 lg:block hidden bg-[#001e2b]'>
				<Image
					src='/1.svg'
					alt='login'
					width={1080}
					height={2000}
					priority
					className='object-contain w-full rounded-l-xl'
				/>
			</div>
		</div>
	);
};

export default FormWrap;
