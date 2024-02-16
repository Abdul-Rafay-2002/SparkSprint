'use client'

import { faqs } from '@/utils/Faqs';
import SubpageTemplate from '../components/SubpageTemplate';
import { Accordion } from 'react-accordion-ts';

interface AccordianProps {
	duration: number;
    open?: boolean;
	multiple: boolean;
}

const FAQS: React.FC<AccordianProps> = ({ duration, multiple, open }) => {
	return (
		<SubpageTemplate
			pageTitle='Frequently Asked Questions'
			pageDescription='Find answers to common questions about the Coding Boot Camp program and our team.'>
			<h1 className='text-4xl font-bold'>Frequently Asked Questions</h1>

			<div>
				
					<Accordion duration={400} multiple={false} items={faqs} />
				
			</div>
		</SubpageTemplate>
	);
};

export default FAQS;
