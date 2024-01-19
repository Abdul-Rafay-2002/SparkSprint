import { getCurrentUser } from '@/actions/getCurrentUser';
import Container from '../components/Container';
import FormWrap from '../components/FormWrap';
import RegisterForm from './RegisterForm';

const Register = async () => {
	const currentUser = await getCurrentUser();
	return (
		<div className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w-full '>
			<FormWrap>
				<RegisterForm currentUser={currentUser} />
			</FormWrap>
		</div>
	);
};

export default Register;
