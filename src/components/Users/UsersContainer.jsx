import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { follow, unfollow, getUsers, followUser, unfollowUser} from "../../redux/reducers/users-reducer/users-reducer"
import { getCurrentPageSelector, getIsFetchingSelector, getPageSizeSelector,
getTotalUsersCountSelector, getUsersSelector } from '../../redux/selectors/users-selectors'
import Preloader from '../common/Preloader/Preloader'
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
			users: getUsersSelector(state),
			pageSize: getPageSizeSelector(state),
			totalUsersCount: getTotalUsersCountSelector(state),
			currentPage: getCurrentPageSelector(state),
			isFetching: getIsFetchingSelector(state),
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
