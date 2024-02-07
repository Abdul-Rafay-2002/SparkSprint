'use client';

import { useRouter } from 'next/navigation';
import queryString from 'query-string';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { BsSearch } from 'react-icons/bs';

// interface

const SearchBar = () => {
	const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);

	const handleSearchToggle = () => {
		setIsSearchBarVisible(!isSearchBarVisible);
	};
	const router = useRouter();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			searchTerm: '',
		},
	});
	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		if (!data.searchTerm) return router.push('/');
		const url = queryString.stringifyUrl(
			{ url: '/', query: { searchTerm: data.searchTerm } },
			{ skipNull: true }
		);

		router.push(url);
		reset();
	};

	return (
		<div className='bg-[#ffffff1a]  max-[500px]:w-10 max-[500px]:h-10 relative flex w-12 h-12 justify-center items-center rounded-full cursor-pointer'>
			<BsSearch size={22} color='#fff' onClick={handleSearchToggle} />

			{isSearchBarVisible && (
				<div className='flex items-center absolute right-0 top-20 '>
					<input
						{...register('searchTerm')}
						className='p-2 border-2 text-slate-900  w-[400px] outline-none  border-[#00ED64] rounded-md'
						autoComplete='off'
						type='text'
						placeholder='Explore SparkSprint products..'
					/>
					<button
						onClick={handleSubmit(onSubmit)}
						className='absolute text-slate-950 font-bold right-0 bg-[#00ED64] p-[9px] rounded-md'>
						Submit
					</button>
				</div>
			)}
		</div>
	);
};

export default SearchBar;
