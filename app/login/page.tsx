import FormWrap from "../components/FormWrap";
import LoginForm from "./LoginForm";

const Login = () => {
	return (
		<div className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w-full '>
			<FormWrap>
				<LoginForm />
			</FormWrap>
		</div>
	);
};

export default Login;
