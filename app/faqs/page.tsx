'use client'
// Import React
import React from 'react';
// Use a more descriptive alias for faqs
import { faqs as importedFAQs } from '@/utils/Faqs';
import SubpageTemplate from '../components/SubpageTemplate';
// Import Accordion component and its styles
import { Accordion } from 'react-accordion-ts';
import 'react-accordion-ts/src/panel.css';

// Define component
const FAQS = () => {
	// Function to render content based on whether it's HTML or not
	const renderContent = (content: string) => {
		const hasHTMLTags = /<[^>]*>/i.test(content);
		return hasHTMLTags ? (
			<div dangerouslySetInnerHTML={{ __html: content }} />
		) : (
			<span>{content}</span>
		);
	};

	// Render faqs with rendered content
	const faqsWithRenderedContent = importedFAQs.map((faq) => ({
		...faq,
		content: renderContent(faq.content),
	}));

	// Return component
	return (
		<SubpageTemplate
			pageTitle='Frequently Asked Questions'
			pageDescription='Find answers to commonly asked questions about Sparksprint'>
			<div className='container mx-auto !py-20'>
				<Accordion
					duration={400}
					multiple={false}
					items={faqsWithRenderedContent}
					
				/>
			</div>
		</SubpageTemplate>
	);
};

// Export component
export default FAQS;
