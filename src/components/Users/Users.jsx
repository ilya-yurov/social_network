import React, {useEffect} from 'react';
import {useState} from 'react'
import s from './Users.module.scss'
import userPhoto from '../../assets/images/avatar.webp'
import User from './User/User';
import {UsersSearchForm} from './UsersSearchForm/UsersSearchForm';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



const Users = ({users, follow, unfollow, setCurrentPage, currentPage, pageSize, totalUsersCount, setFilter, filter}) => {

	const getUsersElements = () => {
		return users.map((u) => {
			return (<User
				isFollowing={u.isFollowing}
				onFollow={follow}
				onUnFollow={unfollow}
				avatar={u.photos.small != null ? u.photos.small : userPhoto}
				id={u.id} follow={u.followed}
				userName={u.name}
				status={u.status}
				key={u.id}
			/>)
		});
	}

	return (
		<div>
			<UsersSearchForm setFilter={setFilter} filter={filter} />
			<div className={s.usersWrapper}>
				<div className={s.users}>
					{getUsersElements()}
				</div>

				<Stack className={s.pagination} spacing={2}>
					<Pagination count={Math.ceil(totalUsersCount/pageSize)} page={currentPage} onChange={setCurrentPage} />
				</Stack>

			</div>
		</div>
	)
}



export default Users;