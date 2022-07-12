import React from 'react';
import s from './Users.module.scss'
import userPhoto from '../../assets/images/avatar.webp'
import User from './User/User';
import { pageSlicer } from '../../utils/helpers';

const Users = ({ users, follow, unfollow, setCurrentPage, currentPage, pageSize, totalUsersCount, }) => {

	const getUsersElements = () => {
		return users.map((u) => {
			return (<User isFollowing={u.isFollowing} onFollow={follow} onUnFollow={unfollow} avatar={u.photos.small != null ? u.photos.small : userPhoto} id={u.id} follow={u.followed} userName={u.name} status={u.status} key={u.id} />)
		});
	}
	const createPaginator = () => {
		let slicedPages = pageSlicer(totalUsersCount, pageSize, currentPage);
		return slicedPages.map(n => {
			return (<button key={n} onClick={() => { setCurrentPage(n) }} className={currentPage === n ? s.users__page_selected : s.users__page}>{n}</button>)
		})
	}

	return (
		<div>
			<div className={s.users}>
				<div className={s.users__header}>Users</div>
				{getUsersElements()}
				<div className={s.users__pages}>
					{createPaginator()}
				</div>
			</div>
		</div>
	)
}

export default Users;