import Avatar from "./Avatar/Avatar"
import Description from "./Description/Description"
import s from "./ProfileInfo.module.scss"

const ProfileInfo = () => {
	return (
		<div className={s.content__infoWrapper}>
			<Avatar />
			<Description />
		</div>
	)
}

export default ProfileInfo