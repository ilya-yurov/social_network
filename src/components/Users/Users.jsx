import React from 'react';
import s from './Users.module.scss'
import userPhoto from '../../assets/images/avatar.webp'
import User from './User/User';

const Users = (props) => {

	let getUsersElements = () => 
	{
		let userElements = props.users.map((u) => {
		return (<User isFollowing={u.isFollowing} onFollow={props.follow} onUnFollow={props.unfollow} avatar={u.photos.small != null ? u.photos.small : userPhoto} id={u.id} follow={u.followed} userName={u.name} status={u.status} key={u.id} />)
	});
		return userElements;
	}

	let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}
	let curP = props.currentPage;
	let slicedPages = pages.slice(curP<4?0:curP-4,curP<4?7:curP+3);

	return	(
		<div>
				<div className={s.users}>
					<div className={s.users__header}>Users</div>
					{getUsersElements()}
					<div className={s.users__pages}>{slicedPages.map(n => {
						return (<button key={n} onClick={ () => {props.setCurrentPage(n)}} className={props.currentPage === n ? s.users__page_selected : s.users__page}>{n}</button>)
					})}
					</div>
				</div>
			</div>
	)
}

export default Users;