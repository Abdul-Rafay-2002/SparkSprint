'use client'
import React from 'react'; // Add explicit import for React
import { faqs as importedFAQs } from '@/utils/Faqs'; // Use a more descriptive alias
import SubpageTemplate from '../components/SubpageTemplate';
import { AccordionProps } from 'react-accordion-ts';
import { Accordion } from 'react-accordion-ts'; // Import AccordionProps directly
import 'react-accordion-ts/src/panel.css';

const FAQS: React.FC<AccordionProps> = ({
	duration = 400,
	multiple = false,
	open,
}) => {
	const renderContent = (content: string) => {
		// Specify content type as string
		// Use a dedicated regex variable for clarity
		const hasHTMLTags = /<[^>]*>/i.test(content);

		return hasHTMLTags ? (
			<div dangerouslySetInnerHTML={{ __html: content }} />
		) : (
			<span>{content}</span>
		);
	};

	const faqsWithRenderedContent = importedFAQs.map((faq) => ({
		...faq,
		content: renderContent(faq.content),
	}));

	return (
		<SubpageTemplate
			pageTitle='Frequently Asked Questions'
			pageDescription='Find answers to commonly asked questions about Sparksprint'>
			<div className='container mx-auto !py-20'>
				<Accordion
					duration={duration}
					multiple={multiple}
					items={faqsWithRenderedContent}
					open={open}
				/>
			</div>
		</SubpageTemplate>
	);
};

export default FAQS;
