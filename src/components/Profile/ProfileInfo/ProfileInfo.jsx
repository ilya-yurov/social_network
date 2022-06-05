import Avatar from "./Avatar/Avatar"
import Description from "./Description/Description"
import s from "./ProfileInfo.module.scss"

const ProfileInfo = (props) => {
	return (
		<div className={s.content__infoWrapper}>
			<Avatar photo={props.profile.photos.large}/>
			<Description info={props.profile}/>
		</div>
	)
}

export default ProfileInfo