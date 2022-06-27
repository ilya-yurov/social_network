import { Field, reduxForm } from 'redux-form';
import s from './Login.module.scss';
import {connect} from 'react-redux';
import { loginUser } from '../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';
import { Input } from '../common/FormsControls/FormsContols';
import { maxLengthCreator, required } from '../../utils/validators/validators';

const maxLength50 = maxLengthCreator(50);

const LoginForm = (props) => {
	return (
		<form className={s.content} onSubmit={props.handleSubmit}>
			<div className={s.content__inputs}>
				<div>
					<Field placeholder={'Login'} name={'login'} component={Input} validate={[required, maxLength50]}/>
				</div>
				<div>
					<Field placeholder={'Password'} type={'password'} name={'password'} component={Input} validate={[required, maxLength50]}/>
				</div>
			</div>
			<div className={s.content__checkbox}>
				<Field component={'input'} name={'rememberMe'} type={'checkbox'} /> remember me
			</div>
			<div className={s.content__button}>
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
