import React from 'react';
import axios from 'axios';
import User from './User/User';
import s from './Users.module.scss'
import userPhoto from '../../assets/images/avatar.webp'

class Users extends React.Component {

	componentDidMount() {
		if (this.props.users.length === 0) {
			axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
			})
		}
	}

	getUsersElements = () => 
	{
		let userElements = this.props.users.map((u) => {
		return (<User onFollow={this.props.follow} onUnFollow={this.props.unfollow} avatar={u.photos.small != null ? u.photos.small : userPhoto} id={u.id} follow={u.follow} userName={u.name} status={u.status} /* location={u.location} */ key={u.id} />)
	});
		return userElements;
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

		let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);
		let pages = [];
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i);
		}
		let curP = this.props.currentPage;
		let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
		let curPL = curP + 2;
		let slicedPages = pages.slice(curP<4?0:curP-4,curP<4?7:curP+3);

	return	<div>
				<div className={s.users}>
					<div className={s.users__header}>Users</div>
					{/* <div className={s.users__button}><button  onClick={this.getUsers}>Get users</button></div> */}
					{this.getUsersElements()}
					<div className={s.users__pages}>{slicedPages.map(n => {
						return (<button key={n} onClick={ () => {this.setCurrentPage(n)} } className={this.props.currentPage === n ? s.users__page_selected : s.users__page}>{n}</button>)
					})}
					</div>
				</div>
			</div>
	}
}

export default Users;