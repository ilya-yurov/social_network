import {connect} from 'react-redux';
import { loginUser } from '../../redux/reducers/auth-reducer/auth-reducer';
import Login from './Login';
import React from 'react';

const LoginContainer = ({isAuth, loginUser}) => {
		return <Login  isAuth={isAuth} loginUser={loginUser}/>
}
let mapStateToProps = (state) => {
	return (
		{
			isAuth: state.auth.isAuth,
		}
	)
}

export default connect(mapStateToProps, {loginUser})(LoginContainer)