import s from './User.module.scss'

const User = (props) => {
	debugger;
	return (
		<div className={s.user}>
			<div className={s.user__wrapper}>
				<div className={s.user__avatar}>
					<img src={props.avatar} />
				</div>
				<div className={s.user__button}>
					{props.follow
					? <div className={s.user__button_unfollow}><button  onClick={() => {props.onUnFollow(props.id)}}>Unfollow</button></div>
					: <div className={s.user__button_follow}><button onClick={() => {props.onFollow(props.id)}}>Follow</button></div>}
				</div>
				<div className={s.user__content}>
					<div className={s.user__name}>{props.userName}</div>
					<div className={s.user__status}>{props.status}</div>
					<div className={s.user__location}>
						<div className={s.user__country}>{'props.location.country'},</div> 
						<div className={s.user__city}>{'props.location.city'}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default User;