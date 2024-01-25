'use client';

import { Product } from '@prisma/client';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { formatPrice } from '@/utils/FormatPrice';
import Heading from '@/app/components/Heading';
import Status from '@/app/components/Status';
import { IoMdCheckboxOutline } from 'react-icons/io';
import { TbBoxOff } from 'react-icons/tb';
import ActionBtn from '@/app/components/ActionBtn';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { MdCached } from 'react-icons/md';
import { FaEye } from 'react-icons/fa6';
import { useCallback } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { deleteObject, getStorage, ref } from 'firebase/storage';
import firebaseApp from '@/libs/firebase';

interface ManageProductsProps {
	products: Product[];
}

const ManageProducts: React.FC<ManageProductsProps> = ({ products }) => {
	let rows: any = [];
	const router = useRouter();
	const storage = getStorage(firebaseApp);

	if (products) {
		rows = products.map((product) => {
			return {
				id: product.id,
				name: product.name,
				price: formatPrice(product.price),
				category: product.category,
				brand: product.brand,
				inStock: product.inStock,
				images: product.images,
			};
		});
	}
	const columns: GridColDef[] = [
		{ field: 'id', headerName: 'ID', width: 250 },
		{ field: 'name', headerName: 'Name', width: 220 },
		{
			field: 'price',
			headerName: 'Price(USD)',
			width: 150,
			renderCell: (params) => {
				return <div className='font-bold'>{params.row.price}</div>;
			},
		},
		{ field: 'category', headerName: 'Category', width: 200 },
		{
			field: 'inStock',
			headerName: 'InStock',
			width: 200,
			renderCell: (params) => {
				return (
					<div className='font-bold'>
						{params.row.inStock === true ? (
							<Status
								text='inStock'
								bg='bg-emerald-300'
								color='text-teal-700 border-2 border-teal-800'
								icon={IoMdCheckboxOutline}
							/>
						) : (
							<Status
								text='Out of Stock'
								bg='bg-red-400'
								color='text-red-800 border-2 border-red-800'
								icon={TbBoxOff}
							/>
						)}
					</div>
				);
			},
		},
		{
			field: 'action',
			headerName: 'Actions',
			width: 200,
			renderCell: (params) => {
				return (
					<div className='flex items-center gap-4 w-full'>
						<ActionBtn
							icon={MdCached}
							onClick={() => {
								handleToggleStock(params.row.id, params.row.inStock);
							}}
						/>
						<ActionBtn icon={RiDeleteBin5Fill} onClick={() => {handleDelete(params.row.id, params.row.images)}} />
						<ActionBtn icon={FaEye} onClick={() => {router.push(`/product/${params.row.id}`)}} />
					</div>
				);
			},
		},
	];

	const handleToggleStock = useCallback((id: string, inStock: boolean) => {
		axios
			.put('/api/product', {
				id,
				inStock: !inStock,
			})
			.then((res) => {
				toast.success('Product status change successfully!');
				router.refresh();
			})
			.catch((err) => {
				toast.error('Opps! Something went wrong.');
				console.log(err);
			});
	}, []);

	const handleDelete = useCallback(async (id: string, images: any[]) => {
		toast('Deleting Product! Please wait...');

		const handleImageDelete = async () => {
			try {
				for (const item of images) {
					if (item.image) {
						const imageRef = ref(storage, item.image);
						await deleteObject(imageRef);
						console.log('Image Deleted', item.image);
					}
				}
			} catch (error) {
				return console.log('Deleting image', error);
			}
		};

		await handleImageDelete();
		axios
			.delete(`/api/product/${id}`)
			.then((res) => {
				toast.success('Product Deleted successfully!');
				router.refresh();
			})
			.catch((err) => {
				toast.error('Opps! Something went wrong.');	
				console.log(err);
			});
	}, []);

	return (
		<div>
			<div>
				<Heading
					title='Manage Products'
					customColor='text-white text-black uppercase underline decoration-[#00ED64] underline-offset-8 mb-8'
				/>
			</div>
			<DataGrid
				rows={rows}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: { page: 0, pageSize: 10 },
					},
				}}
				pageSizeOptions={[5, 10, 15, 20]}
				checkboxSelection
				disableRowSelectionOnClick
			/>
		</div>
	);
};

export default ManageProducts;
