import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { follow, unfollow, getUsers, followUser, unfollowUser, setFilter} from "../../redux/reducers/users-reducer/users-reducer"
import { getCurrentPageSelector, getFilterSelector, getIsFetchingSelector, getPageSizeSelector,
getTotalUsersCountSelector, getUsersSelector } from '../../redux/selectors/users-selectors'
import Preloader from '../common/Preloader/Preloader'
import Users from './Users'
class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize, this.props.filter);
	}

	setCurrentPage = (pageNumber) => {
		this.props.getUsers(pageNumber, this.props.pageSize, this.props.filter);
	}

	setFilter =(filter) => {
		this.props.getUsers(1, this.props.pageSize, filter);
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
			{this.props.isFetching ? <Preloader/> : <Users
			totalUsersCount={this.props.totalUsersCount}
			pageSize={this.props.pageSize}
			currentPage={this.props.currentPage}
			setCurrentPage={this.setCurrentPage}
			users={this.props.users}
			follow={this.followUser}
			unfollow={this.unfollowUser}
			setFilter={this.setFilter}
			filter={this.props.filter}
			/>}
		</>
		)
	}
}

let mapStateToProps = (state) => {
	
	return (
		{
			users: getUsersSelector(state),
			pageSize: getPageSizeSelector(state),
			totalUsersCount: getTotalUsersCountSelector(state),
			currentPage: getCurrentPageSelector(state),
			isFetching: getIsFetchingSelector(state),
			filter: getFilterSelector(state)
		}
	)
}

export default compose(
				connect(
					mapStateToProps,
					{follow, unfollow, getUsers, followUser, unfollowUser, setFilter}
				),
				withAuthRedirect
				)(UsersContainer)
