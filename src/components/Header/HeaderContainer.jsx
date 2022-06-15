import Header from './Header';
import React from 'react';
import {getUserProfile, isUserAuth} from '../../redux/auth-reducer';
import {connect} from 'react-redux';

class HeaderContainer extends React.Component {

	componentDidMount() {
		this.props.isUserAuth();
	}


	render() {
		if (this.props.isAuth) {
			this.props.getUserProfile(this.props.id);
		}
		return <Header {...this.props} />
	}
}

let mapStateToProps = (state) => {
	return (
		{
			isAuth: state.auth.isAuth,
			login: state.auth.login,
			id: state.auth.id,
			photos: state.auth.photos,
		}
	)
}
export default connect(mapStateToProps, {isUserAuth, getUserProfile})(HeaderContainer)