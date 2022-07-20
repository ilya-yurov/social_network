import { Field, reduxForm } from 'redux-form';
import s from './Login.module.scss';
import { Navigate } from 'react-router-dom';
import { Input } from '../common/FormsControls/FormsContols';
import { maxLengthCreator, required } from '../../utils/validators/validators';

const maxLength50 = maxLengthCreator(50);

const LoginForm = ({ handleSubmit, error }) => {
	return (
		<form className={s.content} onSubmit={handleSubmit}>
			<div className={s.content__inputs}>
				<div>
					<Field placeholder={'Login'} name={'login'} component={Input} validate={[required, maxLength50]} />
				</div>
				<div>
					<Field placeholder={'Password'} type={'password'} name={'password'} component={Input} validate={[required, maxLength50]} />
				</div>
			</div>
			<div className={s.content__checkbox}>
				<Field component={'input'} name={'rememberMe'} type={'checkbox'} /> remember me
			</div>
			<div className={s.content__button}>
				<button data-testid='button-element'>Login</button>
			</div>
			<div className={s.content__error}>
				{error}
			</div>
		</form>
	);
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = ({ loginUser, isAuth }) => {
	const onSubmit = (FormData) => {
		loginUser(FormData.login, FormData.password, FormData.rememberMe)
	}
	if (!isAuth) {
		return (
			<div data-testid='login-page' className={s.login}>
				<h1>Login</h1>
				<LoginReduxForm onSubmit={onSubmit} />
			</div>
		)
	} else {
		return <Navigate to={'/profile'} />
	}
}

export default Login;
