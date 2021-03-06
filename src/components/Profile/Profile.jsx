import Wallpaper from './Wallpaper/Wallpaper';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from '../common/Preloader/Preloader';


const Profile = (props) => {
	if (!props.profile ) {
		return <Preloader />
	}
	return (
		<div data-testid='profile-page'>
			<Wallpaper/>
			<ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
			<MyPostsContainer/>
		</div>
	);
}

export default Profile;