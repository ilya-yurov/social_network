import { connect } from 'react-redux';
import { setProfile, setUserProfile } from '../../redux/profile-reducer';
import {useLocation, useNavigate, useParams,} from "react-router-dom";
import Profile from './Profile';
import React from 'react';
import axios from 'axios'
import { profileAPI } from '../../api/api';

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

let withRouter = (Component) => {
	let ComponentWithRouterProp = (props) => {
		let location = useLocation();   //in router v6 in class comps we must use hooks
		let navigate = useNavigate();
		let params = useParams();
		return (
			<Component
				{...props}
				router={{ location, navigate, params }}
			/>
		);
	}
	return ComponentWithRouterProp;
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	myProfile: state.profilePage.myProfile
})
export default connect(mapStateToProps, {setProfile})(withRouter(ProfileContainer))