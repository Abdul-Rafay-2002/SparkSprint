'use client';

import { faqs } from '@/utils/Faqs';
import SubpageTemplate from '../components/SubpageTemplate';
import { Accordion } from 'react-accordion-ts';
import 'react-accordion-ts/src/panel.css';

interface AccordionProps {
	duration: number;
	open?: number;
	multiple: boolean;
}

const FAQS: React.FC<AccordionProps> = ({ duration, multiple, open }) => {
	function renderContent(content: any) {
		// Check if the content has HTML tags
		if (/<[^>]*>/i.test(content)) {
			return <div dangerouslySetInnerHTML={{ __html: content }} />;
		} else {
			return <span>{content}</span>;
		}
	}

	// Render FAQs with HTML content conditionally
	const faqsWithRenderedContent = faqs.map((faq) => ({
		...faq,
		content: renderContent(faq.content),
	}));


	return (
		<SubpageTemplate
			pageTitle='Frequently Asked Questions'
			pageDescription='Find answers to commonly asked questions about Sparksprint'>
			<div className='max-w-[1020px] mx-auto py-20 w-full '>
				<Accordion
					duration={400}
					multiple={false}
					items={faqsWithRenderedContent}
					open={open}
				/>
			</div>
		</SubpageTemplate>
	);
};

export default FAQS;
