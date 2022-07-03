import { connect } from 'react-redux';
import { getStatus, setProfile, updateStatus } from '../../redux/profile-reducer';
import Profile from './Profile';
import React from 'react';
import { withRouter } from '../../hoc/withRouter';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
	componentDidMount = () => {
		let userId =  this.props.router.params.userId;
		if (!userId && this.props.isAuth) {
			userId = this.props.authorizedUserId;
		}
		this.props.setProfile(userId);
		this.props.getStatus(userId)
	}
	componentDidUpdate = (prevProps) => {
		let userId = prevProps.router.params.userId;
		if (userId !== this.props.router.params.userId) {
			if (this.props.isAuth) {
				userId = this.props.authorizedUserId;
			}
			this.props.setProfile(userId);
			this.props.getStatus(userId);
		}
	}
	render() {
		return <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	myProfile: state.profilePage.myProfile,
	status: state.profilePage.status,
	authorizedUserId: state.auth.id,
	isAuth: state.auth.isAuth
})

export default compose(
	connect(mapStateToProps, {setProfile, getStatus, updateStatus}),
	withRouter,
	withAuthRedirect
)(ProfileContainer)