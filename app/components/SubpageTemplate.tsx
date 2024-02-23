import React from 'react';
import Container from './Container';

interface SubpageTemplateProps {
	pageTitle: string;
	pageDescription?: string;
	children: React.ReactNode;
}

const SubpageTemplate: React.FC<SubpageTemplateProps> = ({
	pageTitle,
	pageDescription,
	children,
}) => {
	return (
		<div className='w-full'>
			<div className='ctabg py-16 md:py-20 sm:py-32 text-center  text-white'>
				<Container>
					<h1 className='text-3xl sm:text-5xl md:text-6xl'>{pageTitle}</h1>
					<p className='mt-4 mb-8 text-lg text-gray-300/80'>{pageDescription}</p>
				</Container>
			</div>
			<div>
				<Container>{children}</Container>
			</div>
		</div>
	);
};

export default SubpageTemplate;
