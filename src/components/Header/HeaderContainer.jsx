import Header from './Header';
import React from 'react';
import {setAuthUserData, setUserPhoto} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import axios from 'axios';
import defaultUserPhoto from '../../assets/images/avatar.webp'


class HeaderContainer extends React.Component {

	componentDidMount() {
		axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
		.then(response => {
			if (response.data.resultCode === 0) {
				let {email, id, login} = response.data.data;
				this.props.setAuthUserData(id, email, login);
				axios.get(`https://social-network.samuraijs.com/api/1.0//profile/${this.props.id}`)
				.then(response => {
						let {small, large} = response.data.photos;
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