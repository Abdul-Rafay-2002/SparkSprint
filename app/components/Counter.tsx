'use client';

import { useEffect, useState } from 'react';

interface CounterProps {
	title: string;
	initialCount?: number;
	finalCount?: number;
}

const Counter: React.FC<CounterProps> = ({
	title,
	initialCount = 0,
	finalCount = 100000,
}) => {
	const [count, setCount] = useState(initialCount);

	useEffect(() => {
		const interval = setInterval(() => {
			if (count < finalCount) {
				setCount((prevCount) => prevCount + 1);
			}
		}, 10);
		return () => clearInterval(interval);
	}, [count, finalCount]);

	return (
		<div className='flex flex-col items-center'>
			<h1 className='text-[#00ED64] drop-shadow-[0_2px_1.2px_rgba(0,0,0,1)] transition-all text-5xl'>
				{count}
				<sup>+</sup>
			</h1>
			<h3 className='text-[#001e2b] text-2xl mt-2'>{title}</h3>
		</div>
	);
};

export default Counter;
