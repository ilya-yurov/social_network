import Avatar from './ProfileInfo/Avatar/Avatar';
import Description from './ProfileInfo/Description/Description';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.scss'
import Wallpaper from './Wallpaper/Wallpaper';
import ProfileInfo from './ProfileInfo/ProfileInfo';




const Profile = () => {
	return (
		<div>
			<Wallpaper />
			<ProfileInfo/>
			<MyPosts />
		</div>
	);
}

export default Profile;