import { connect } from 'react-redux';
import { setProfile, setUserProfile } from '../../redux/profile-reducer';
import Profile from './Profile';
import React from 'react';
import { withRouter } from '../../hoc/withRouter';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
	componentDidMount = () => {
		let userId =  this.props.router.params.userId;
		if (!userId) {
			userId = 2;
		}
		this.props.setProfile(userId);
	}

	render() {
		return <Profile profile={this.props.profile}/>
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	myProfile: state.profilePage.myProfile
})

export default compose(
	connect(mapStateToProps, {setProfile}),
	withRouter,
	withAuthRedirect
)(ProfileContainer)