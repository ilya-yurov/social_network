import MyPosts from './MyPosts/MyPosts';
import Wallpaper from './Wallpaper/Wallpaper';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	return (
		<div>
			<Wallpaper />
			<ProfileInfo/>
			<MyPosts posts={props.posts}/>
		</div>
	);
}

export default Profile;