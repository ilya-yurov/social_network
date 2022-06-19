import Header from './Header';
import React from 'react';
import {getUserProfile, isUserAuth} from '../../redux/auth-reducer';
import {connect} from 'react-redux';

class HeaderContainer extends React.Component {

	componentDidMount() {
		this.props.isUserAuth();
		this.props.getUserProfile(this.props.id);
	}

	componentDidUpdate = (prevProps, prevState) => {
		if(!this.props.isPhotoUpdate)
			this.props.getUserProfile(this.props.id)
	}

	render() {
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
			isPhotoUpdate: state.auth.isPhotoUpdate
		}
	)
}
export default connect(mapStateToProps, {isUserAuth, getUserProfile})(HeaderContainer)