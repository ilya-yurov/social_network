import s from './User.module.scss'

const User = (props) => {
	let followText = (followState) => {
		switch (followState)
		{
			case true:
				return 'FOLLOW'
			case false:
				return 'UNFOLLOW'
		}
	}

	let onFollowChange = () => {
		debugger;
		if (props.follow == true)
			props.onFollowChange(false, props.id);
		else
			props.onFollowChange(true, props.id);
	}

	return (
		<div className={s.user}>
			<div className={s.user__wrapper}>
				<div className={s.user__avatar}></div>
				<div className={s.user__button}>
					<button onClick={onFollowChange}>{followText(props.follow)}</button>
				</div>
				<div className={s.user__content}>
					<div className={s.user__name}>{props.userName}</div>
					<div className={s.user__status}>{props.status}</div>
					<div className={s.user__location}>
						<div className={s.user__country}>{props.location.country},</div> 
						<div className={s.user__city}>{props.location.city}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default User;