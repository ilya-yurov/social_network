import Wallpaper from './Wallpaper/Wallpaper';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from '../common/Preloader';

const Profile = (props) => {
	if (!props.profile ) {
		return <Preloader />
	}
	return (
		<div>
			<Wallpaper/>
			<ProfileInfo profile={props.profile}/>
			<MyPostsContainer/>
		</div>
	);
}

export default Profile;