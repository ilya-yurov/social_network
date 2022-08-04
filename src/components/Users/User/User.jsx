import { NavLink } from 'react-router-dom';
import s from './User.module.scss'

const User = (props) => {
	return (
		<div className={s.user}>
			<div className={s.user__wrapper}>
				<div className={s.user__avatar}>
					<NavLink to={'/profile/' + props.id}>
						<img src={props.avatar} />
					</NavLink>
				</div>
				<div className={s.user__button}>
					{props.follow
					? <div className={s.user__button_unfollow}><button disabled={props.isFollowing} onClick={() => {props.onUnFollow(props.id)}}>Unfollow</button></div>
					: <div className={s.user__button_follow}><button disabled={props.isFollowing} onClick={() => {props.onFollow(props.id)}}>Follow</button></div>}
				</div>
				<div data-testid='user-element' className={s.user__content}>
					<div className={s.user__name}>{props.userName}</div>
					<div className={s.user__status}>{props.status}</div>
				</div>
			</div>
		</div>
	);
}

export default User;