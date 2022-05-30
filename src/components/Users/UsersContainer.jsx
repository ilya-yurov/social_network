import { connect } from "react-redux";
import { followChangeActionCreator } from "../../redux/usersReducer";
import Users from './Users'

let mapStateToProps = (state) => {
	return (
		{
			users: state.usersPage.users
		}
	)
}

let mapDispatchToProps = (dispatch) => {
	return (
		{
			onFollowChange: (followState, id) => dispatch(followChangeActionCreator(followState, id)),
		}
	)
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;