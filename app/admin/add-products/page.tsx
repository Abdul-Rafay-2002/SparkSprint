import { getCurrentUser } from '@/actions/getCurrentUser';
import AddProductForm from './AddProductForm';
import NullData from '@/app/components/NullData';

const AddProducts = async () => {

    const currentUser = await getCurrentUser();
    if (!currentUser || currentUser.role !== "ADMIN"){
        return <NullData title='Oops! Access Denied.'/>
    }

	return (
		<div className=''>
			<AddProductForm />
		</div>
	);
};

export default AddProducts;
