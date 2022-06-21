import { Field, reduxForm } from 'redux-form';
import s from './Login.module.scss';
import {connect} from 'react-redux';
import { loginUser } from '../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';


const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field placeholder={'Login'} name={'login'} component={'input'}/>
			</div>
			<div>
				<Field placeholder={'Password'} name={'password'} component={'input'}/>
			</div>
			<div>
				<Field component={'input'} name={'rememberMe'} type={'checkbox'} /> remember me
			</div>
			<div>
				<button>Login</button>
			</div>
		</form>
	);
}
const LoginReduxForm =  reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
	const onSubmit = (FormData) => {
		props.loginUser(FormData.login, FormData.password, FormData.rememberMe)
	}
	if(!props.isAuth) {
		return (
			<div className={s.login}>
				<h1>Login</h1>
				<LoginReduxForm onSubmit={onSubmit}/>
			</div>
		)
	} else {
		return <Navigate to={'/profile'} />
	}
}

let mapStateToProps = (state) => {
	return (
		{
			isAuth: state.auth.isAuth,
		}
	)
}

export default connect(mapStateToProps, {loginUser})(Login)
