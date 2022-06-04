import axios from 'axios';
import React from 'react';
import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from "../../redux/usersReducer";
import Users from "./Users";

class UsersContainer extends React.Component {

	componentDidMount() {
		if (this.props.users.length === 0) {
			axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
			})
		}
	}

	setCurrentPage = (pageNumber) => 
	{
		this.props.setCurrentPage(pageNumber);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items);
			})
	}

	render = () => {
		debugger;
		return <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} setCurrentPage={this.setCurrentPage} users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow}/>
	}
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);