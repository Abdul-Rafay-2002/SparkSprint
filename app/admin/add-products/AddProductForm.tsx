'use client';

import Button from '@/app/components/Button';
import Heading from '@/app/components/Heading';
import CategoryTab from '@/app/components/input/CategoryTab';
import CheckBox from '@/app/components/input/CheckBox';
import SelectColor from '@/app/components/input/SelectColor';
import TextArea from '@/app/components/input/TextArea';
import InputV2 from '@/app/components/input_v_2/InputV2';
import firebaseApp from '@/libs/firebase';
import { categories } from '@/utils/Categories';
import { colors } from '@/utils/Colors';
import { useCallback, useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import {
	getDownloadURL,
	getStorage,
	ref,
	uploadBytesResumable,
} from 'firebase/storage';
import axios from 'axios';
import { useRouter } from 'next/navigation';

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
	const [images, setImages] = useState<ImageType[] | null>();
	const [isProductCreated, setIsProductCreated] = useState(false);
	const router = useRouter();
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

	useEffect(() => {
		setCustomValue('images', images);
	}, [images]);

	useEffect(() => {
		if (isProductCreated) {
			reset();
			setImages(null);
			setIsProductCreated(false);
		}
	}, [isProductCreated]);

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		console.log('Product', data);
		//upload images to firebase
		setIsLoading(true);
		let uploadedImage: UploadedImageType[] = [];

		if (!data.category) {
			setIsLoading(false);
			return toast.error('Category is not selected!');
		}

		if (!data.images || data.images.length === 0) {
			setIsLoading(false);
			return toast.error('No selected Image.');
		}

		const handleImageUpload = async () => {
			toast('Product is creating, Please wait ...');

			try {
				for (const item of data.images) {
					if (item.image) {
						const fileName = new Date().getTime() + ' - ' + item.image.name;
						const storage = getStorage(firebaseApp);
						const storageRef = ref(storage, `products/${fileName}`);
						const uploadTask = uploadBytesResumable(storageRef, item.image);

						await new Promise<void>((resolve, reject) => {
							uploadTask.on(
								'state_changed',
								(snapshot) => {
									const progress =
										(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
									console.log('Upload is ' + progress + '% done');
									switch (snapshot.state) {
										case 'paused':
											console.log('Upload is paused');
											break;
										case 'running':
											console.log('Upload is running');
											break;
									}
								},
								(error) => {
									console.log('Error uploading image', error);
									reject(error);
								},
								() => {
									getDownloadURL(uploadTask.snapshot.ref)
										.then((downloadURL) => {
											uploadedImage.push({ ...item, image: downloadURL });
											console.log('File available at', downloadURL);
											resolve();
										})
										.catch((error) => {
											console.log('Error getting the download URL', error);
											reject(error);
										});
								}
							);
						});
					}
				}
			} catch (error) {
				setIsLoading(false);
				console.log('Error handling image uploads', error);

				return toast.error('Error handling image uploads');
			}
		};
		await handleImageUpload();
		const productData = { ...data, images: uploadedImage };

		//save product to mongodb
		axios
			.post('/api/product', productData)
			.then(() => {
				toast.success('Product Created!..');
				setIsProductCreated(true);
				router.refresh();
			})
			.catch((error) => {
				toast.error('Something went wrong when saving product to DB.');
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const category = watch('category');

	const setCustomValue = (id: string, value: any) => {
		setValue(id, value, {
			shouldValidate: true,
			shouldDirty: true,
			shouldTouch: true,
		});
	};

	const addImageToState = useCallback((value: ImageType) => {
		setImages((prev) => {
			if (!prev) {
				return [value];
			}

			return [...prev, value];
		});
	}, []);
	const removeImageFromState = useCallback((value: ImageType) => {
		setImages((prev) => {
			if (prev) {
				const filteredImages = prev.filter(
					(item) => item.color !== value.color
				);

				return filteredImages;
			}

			return prev;
		});
	}, []);

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
						width='max-w-[100%] w-full mb-[72px]'
					/>
					<InputV2
						id='price'
						label='Price'
						disabled={isLoading}
						register={register}
						errors={errors}
						required
						type='number'
						width='max-w-[100%] w-full mb-[72px]'
					/>

					<InputV2
						id='brand'
						label='Brand'
						disabled={isLoading}
						register={register}
						errors={errors}
						required
						width='max-w-[100%] w-full mb-[72px]'
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
						<div className='mb-2 font-bold mx-2'>Select Category</div>
						<div className='grid grid-cols-2 md:grid-cols-3 max-h-[50vh] customScollbar overflow-y-auto'>
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
								addImageToState={addImageToState}
								removeImageFromState={removeImageFromState}
								isProductCreated={isProductCreated}
							/>
						);
					})}
				</div>
			</div>
			<Button
				label={isLoading ? 'Loading' : 'Add Product'}
				onClick={handleSubmit(onSubmit)}
			/>
		</>
	);
};

export default AddProductForm;
