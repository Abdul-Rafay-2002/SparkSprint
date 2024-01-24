'use client';

import Heading from '@/app/components/Heading';
import CategoryTab from '@/app/components/input/CategoryTab';
import CheckBox from '@/app/components/input/CheckBox';
import TextArea from '@/app/components/input/TextArea';
import InputV2 from '@/app/components/input_v_2/InputV2';
import { categories } from '@/utils/Categories';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

const AddProductForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		reset,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			name: '',
			description: '',
			price: '',
			brand: '',
			category: '',
			inStock: Boolean,
			images: [],
		},
	});

	const category = watch('category');
	const setCustomValue = (id: string, value: any) => {
		setValue(id, value, {
			shouldValidate: true,
			shouldDirty: true,
			shouldTouch: true,
		});
	};
	return (
		<>
			<Heading
				title='Add Products'
				customColor='text-white uppercase underline decoration-[#00ED64] underline-offset-8 mb-12'
			/>
			<div className='flex w-full flex-row gap-8 items-start'>
				<div className='w-[50%]'>
					<InputV2
						id='name'
						label='name'
						disabled={isLoading}
						register={register}
						errors={errors}
						required
						width='max-w-[100%] w-full mb-16'
					/>
					<InputV2
						id='price'
						label='Price'
						disabled={isLoading}
						register={register}
						errors={errors}
						required
						type='number'
						width='max-w-[100%] w-full mb-16'
					/>

					<InputV2
						id='brand'
						label='Brand'
						disabled={isLoading}
						register={register}
						errors={errors}
						required
						width='max-w-[100%] w-full mb-16'
					/>
					<TextArea
						id='description'
						label='Description'
						disabled={isLoading}
						register={register}
						errors={errors}
						required
						width='max-w-[100%] w-full mb-4'
					/>
				</div>
				<div className='w-[50%]'>
					<CheckBox
						id='inStock'
						register={register}
						label='This product is inStock?'
						width='w-[100%] mx-2'
					/>
					<div className='w-full mt-4'>
						<div className='mb-4 font-bold mx-2'>Select Category</div>
						<div className='grid grid-cols-2 md:grid-cols-3 max-h-[50vh] overflow-y-auto'>
							{categories.map((item) => {
								if (item.label === 'All') {
									return null;
								}
								return (
									<div key={item.label} className='col-span'>
										<CategoryTab
											onClick={(category) =>
												setCustomValue('category', category)
											}
											selected={category === item.label}
											label={item.label}
											icon={item.icon}
										/>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AddProductForm;
