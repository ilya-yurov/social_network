import Header from './Header';
import React from 'react';
import {setAuthUserData, setUserPhoto} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import defaultUserPhoto from '../../assets/images/avatar.webp'
import { authAPI, profileAPI } from '../../api/api';

class HeaderContainer extends React.Component {

	componentDidMount() {
		authAPI.isAuth()
		.then(data => {
			if (data.resultCode === 0) {
				let {email, id, login} = data.data;
				this.props.setAuthUserData(id, email, login);
				profileAPI.getUserProfile(this.props.id)
				.then(data => {
						let {small, large} = data.photos;
						if (small === null)
							small = defaultUserPhoto;
						if (large === null)
							large = defaultUserPhoto;
						this.props.setUserPhoto(small, large);
				})
			}
		})
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
		}
	)
}
export default connect(mapStateToProps, {setAuthUserData, setUserPhoto})(HeaderContainer)