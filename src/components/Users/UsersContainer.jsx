import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { follow, unfollow, getUsers, followUser, unfollowUser} from "../../redux/users-reducer"
import Preloader from '../common/Preloader'
import Users from './Users'

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}

	setCurrentPage = (pageNumber) => {
		this.props.getUsers(pageNumber, this.props.pageSize);
	}

	followUser = (userId) => {
		this.props.followUser(userId);
	}

	unfollowUser = (userId) => {
		this.props.unfollowUser(userId);
	}

	render = () => {
		return (
		<> 
			{this.props.isFetching ? <Preloader/> : <Users  totalUsersCount={this.props.totalUsersCount}
			pageSize={this.props.pageSize} currentPage={this.props.currentPage}
			setCurrentPage={this.setCurrentPage} users={this.props.users}
			follow={this.followUser} unfollow={this.unfollowUser}/>}
		</>
		)
	}
}

let mapStateToProps = (state) => {
	return (
		{
			users: state.usersPage.users,
			pageSize: state.usersPage.pageSize,
			totalUsersCount: state.usersPage.totalUsersCount,
			currentPage: state.usersPage.currentPage,
			isFetching: state.usersPage.isFetching,
		}
	)
}

export default compose(
				connect(
					mapStateToProps,
					{follow, unfollow, getUsers, followUser, unfollowUser}
				),
				withAuthRedirect
				)(UsersContainer)
