import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profileReducer';
import Profile from './Profile';
import React from 'react';
import axios from 'axios'

class ProfileContainer extends React.Component {
	componentDidMount = () => {
		axios.get('https://social-network.samuraijs.com/api/1.0/profile/24186')
		.then(response => {
			this.props.setUserProfile(response.data);
		})
	}


	render() {
		return <Profile profile={this.props.profile}/>
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)