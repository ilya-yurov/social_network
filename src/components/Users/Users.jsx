
import axios from 'axios';
import User from './User/User';
import s from './Users.module.scss'
import userPhoto from '../../assets/images/avatar.webp'


const Users = (props) => {

	if (props.users.length === 0)
	{
		axios.get("https://social-network.samuraijs.com/api/1.0/users")
		.then(response => {
			props.setUsers(response.data.items)
		})
	}

	let userElements = props.users.map((u) => <User onFollow={props.follow} onUnFollow={props.unfollow} avatar={u.photos.small != null ? u.photos.small : userPhoto} id={u.id} follow={u.follow} userName={u.name} status={u.status} /* location={u.location} */ key={u.id} />)
	return (
		<div>
			<div className={s.users}>
				<div className={s.users__header}>Users</div>
				{userElements}
			</div>
		</div>
	);
}

export default Users;