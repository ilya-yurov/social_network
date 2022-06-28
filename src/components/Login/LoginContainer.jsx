import {connect} from 'react-redux';
import { loginUser } from '../../redux/auth-reducer';
import Login from './Login';
import React from 'react';

class LoginContainer extends React.Component {
	render() {
		return <Login isAuth={this.props.isAuth} loginUser={this.props.loginUser}/>
	}
}
let mapStateToProps = (state) => {
	return (
		{
			isAuth: state.auth.isAuth,
		}
	)
}

export default connect(mapStateToProps, {loginUser})(LoginContainer)