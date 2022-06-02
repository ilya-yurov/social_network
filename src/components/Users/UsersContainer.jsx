import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from "../../redux/usersReducer";
import Users from './Users'

let mapStateToProps = (state) => {
	return (
		{
			users: state.usersPage.users,
			pageSize: state.usersPage.pageSize,
			totalUsersCount: state.usersPage.totalUsersCount,
			currentPage: state.usersPage.currentPage
		}
	)
}

let mapDispatchToProps = (dispatch) => {
	return (
		{
			follow: (id) => dispatch(followAC(id)),
			unfollow: (id) => dispatch(unfollowAC(id)),
			setUsers: (users) => dispatch(setUsersAC(users)),
			setCurrentPage: (page) => dispatch(setCurrentPageAC(page)),
			setTotalUsersCount: (count) => dispatch(setTotalUsersCountAC(count)),
		}
	)
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;