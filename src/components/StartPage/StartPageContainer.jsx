import {connect} from 'react-redux'
import React from 'react'
import {compose} from 'redux'
import {withRouter} from '../../hoc/withRouter'
import StartPage from './StartPage'

const StartPageContainer = (props) => {
	return (
		<div>
			<StartPage {...props} />
		</div>
	)
}

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
)(StartPageContainer)