
import User from './User/User';
import s from './Users.module.scss'

const Users = (props) => {
	let userElements = props.users.map((p) => <User onFollowChange={props.onFollowChange} id={p.id} follow ={p.follow} userName={p.userName} status={p.status} location={p.location} key={p.id}/>)
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