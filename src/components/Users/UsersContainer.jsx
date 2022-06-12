import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow } from "../../redux/users-reducer"
import Preloader from '../common/Preloader'
import Users from './Users'

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true,})
		.then(response => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(response.data.items);
			this.props.setTotalUsersCount(response.data.totalCount);
		})
	}

	setCurrentPage = (pageNumber) => 
	{
		this.props.setCurrentPage(pageNumber);
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {withCredentials: true})
			.then(response => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(response.data.items);
			})
	}

	followUser = (userId) => {
		axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, 
		{
			withCredentials: true,
			headers: {
				'API-KEY': '4be4028a-d5f3-47fe-8ba5-3e9bb42ed4d7'
			}
		})
		.then(response => {
			if(response.data.resultCode === 0) {
				this.props.follow(userId);
			} else {
				console.log(response.data.messages);
			}
		})
	}

	unfollowUser = (userId) => {
		axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
			withCredentials: true,
			headers: {
				'API-KEY': '4be4028a-d5f3-47fe-8ba5-3e9bb42ed4d7'
			}
		})
		.then(response => {
			if(response.data.resultCode === 0) {
				this.props.unfollow(userId);
			} else {
				console.log(response.data.messages);
			}
		})
	}

	render = () => {
		return (
		<> 
			{this.props.isFetching ? <Preloader/> : <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} setCurrentPage={this.setCurrentPage} users={this.props.users} follow={this.followUser} unfollow={this.unfollowUser}/>}
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
			isFetching: state.usersPage.isFetching
		}
	)
}

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersContainer);