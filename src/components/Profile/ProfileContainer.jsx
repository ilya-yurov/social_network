import { connect } from 'react-redux';
import { getStatus, setProfile, updateStatus } from '../../redux/profile-reducer';
import Profile from './Profile';
import React from 'react';
import { withRouter } from '../../hoc/withRouter';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
	componentDidMount = () => {
		let userId =  this.props.router.params.userId;
		if (!userId) {
			userId = 24401;
		}
		this.props.setProfile(userId);
		this.props.getStatus(userId)
	}

	render() {
		return <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	myProfile: state.profilePage.myProfile,
	status: state.profilePage.status,
})

export default compose(
	connect(mapStateToProps, {setProfile, getStatus, updateStatus}),
	withRouter
	/* withAuthRedirect */
)(ProfileContainer)