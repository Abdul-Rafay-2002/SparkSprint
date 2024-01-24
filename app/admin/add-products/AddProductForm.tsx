'use client';

import Heading from '@/app/components/Heading';
import CategoryTab from '@/app/components/input/CategoryTab';
import CheckBox from '@/app/components/input/CheckBox';
import SelectColor from '@/app/components/input/SelectColor';
import TextArea from '@/app/components/input/TextArea';
import InputV2 from '@/app/components/input_v_2/InputV2';
import { categories } from '@/utils/Categories';
import { colors } from '@/utils/Colors';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

export type ImageType = {
	color: string;
	colorCode: string;
	image: File | null;
};
export type UploadedImageType = {
	color: string;
	colorCode: string;
	image: string;
};

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
				customColor='text-white text-black uppercase underline decoration-[#00ED64] underline-offset-8 mb-8'
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
						width='max-w-[100%] w-full mb-[75px]'
					/>
					<InputV2
						id='price'
						label='Price'
						disabled={isLoading}
						register={register}
						errors={errors}
						required
						type='number'
						width='max-w-[100%] w-full mb-[75px]'
					/>

					<InputV2
						id='brand'
						label='Brand'
						disabled={isLoading}
						register={register}
						errors={errors}
						required
						width='max-w-[100%] w-full mb-[75px]'
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
			<div className='w-full flex flex-col flex-wrap gap-4'>
				<div className=' mt-4'>
					<h3 className='text-slate-200 font-semibold mb-1 text-2xl'>
						Select the available colors of the products along with their
						respective images for upload.
					</h3>
					<p className='text-slate-500'>
						You must upload an image for each of the color selected otherwise
						your color selection will be ignored.
					</p>
				</div>
				<div className='grid grid-cols-2 md:grid-cols-3'>
					{colors.map((item, index) => {
						return (
							<SelectColor
								key={index}
								item={item}
								addImageToState={() => {}}
								removeImageFromState={() => {}}
								isProductCreated={false}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default AddProductForm;
