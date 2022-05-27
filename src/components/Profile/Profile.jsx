import Wallpaper from './Wallpaper/Wallpaper';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
	return (
		<div>
			<Wallpaper/>
			<ProfileInfo/>
			<MyPostsContainer/>
		</div>
	);
}

export default Profile;