import {connect} from 'react-redux';
import React from 'react'
import {NavLink} from 'react-router-dom';
import {compose} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {withRouter} from '../../hoc/withRouter';
import ProfileContainer from '../Profile/ProfileContainer';
import StartPage from './StartPage';
import s from './StartPage.module.scss'

const StartPageContainer = (props) => {
	return (
		<div>
			<StartPage {...props}/>
		</div>
	);
};

let mapStateToProps = (state) => {
	return (
		{
			isAuth: state.auth.isAuth,
		}
	)
}

export default compose(
	connect(mapStateToProps),
	withRouter
	)(StartPageContainer);