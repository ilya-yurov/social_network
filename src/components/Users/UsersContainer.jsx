import React from 'react'
import { connect } from 'react-redux'
import { usersAPI } from '../../api/api'
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleFollowingProgress, toggleIsFetching, unfollow } from "../../redux/users-reducer"
import Preloader from '../common/Preloader'
import Users from './Users'

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.toggleIsFetching(true);
	usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
	.then(data => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(data.items);
			this.props.setTotalUsersCount(data.totalCount);
		})
	}

	setCurrentPage = (pageNumber) => 
	{
		this.props.setCurrentPage(pageNumber);
		this.props.toggleIsFetching(true);
		usersAPI.getUsers(pageNumber, this.props.pageSize)
		.then(data => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(data.items);
			})
	}

	followUser = (userId) => {
		this.props.toggleFollowingProgress(true, userId);
		usersAPI.followUser(userId)
		.then (data => {
			if(data.resultCode === 0) {
				this.props.follow(userId);
			} else {
				console.log(data.messages);
			}
		this.props.toggleFollowingProgress(false, userId);
		})
	}

	unfollowUser = (userId) => {
		this.props.toggleFollowingProgress(true, userId);
		usersAPI.unfollowUser(userId)
		.then (data => {
			if(data.resultCode === 0) {
				this.props.unfollow(userId);
			} else {
				console.log(data.messages);
			}
		this.props.toggleFollowingProgress(false, userId);
		})
	}

	render = () => {
		return (
		<> 
			{this.props.isFetching ? <Preloader/> : <Users  totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} setCurrentPage={this.setCurrentPage} users={this.props.users} follow={this.followUser} unfollow={this.unfollowUser}/>}
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

export default connect(mapStateToProps, {follow, unfollow, toggleFollowingProgress, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersContainer);