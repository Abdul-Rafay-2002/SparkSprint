import getProducts from '@/actions/getProducts';
import Dashboard from './Dashboard';
import getOrders from '@/actions/getOrders';
import { getUsers } from '@/actions/getUsers';
import BarGraph from './BarGraph';
import getGraphData from '@/actions/getGraphsData';

const Admin = async () => {
	const products = await getProducts({ category: null });
	const orders = await getOrders();
	const users = await getUsers();
	const graphData = await getGraphData();

	return (
		<div className=''>
			<Dashboard products={products} orders={orders} users={users} />
			<div className='max-w-[1020px] mx-auto mt-10 mb-10'>
				<BarGraph data={graphData}/>
			</div>
		</div>
	);
};

export default Admin;
