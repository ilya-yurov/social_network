import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import Preloader from '../common/Preloader/Preloader'
import s from './Profile.module.scss'

const Profile = (props) => {
	if (!props.profile) {
		return <Preloader />
	}
	return (
		<div className={s.content} data-testid='profile-page'>
			<ProfileInfo currentUserId={props.currentUserId}
				profile={props.profile} status={props.status}
				updateStatus={props.updateStatus} isAuth={props.isAuth} />
			<MyPostsContainer />
		</div>
	)
}

export default Profile