import Avatar from "./Avatar/Avatar"
import Description from "./Description/Description"
import s from "./ProfileInfo.module.scss"

const ProfileInfo = (props) => {
	return (
		<div className={s.content__infoWrapper}>
			<Avatar photo={props.profile.photos.large}/>
			<Description isAuth={props.isAuth} currentUserId={props.currentUserId} info={props.profile} status={props.status} updateStatus={props.updateStatus}/>
		</div>
	)
}

export default ProfileInfo