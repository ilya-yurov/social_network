import Avatar from './Avatar/Avatar';
import Description from './Description/Description';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.scss'
import Wallpaper from './Wallpaper/Wallpaper';


const Profile = () => {
	return (
		<div className={s.content}>
			<Wallpaper />
			<div className={s.content__infoWrapper}>
				<Avatar />
				<Description />
			</div>
				<MyPosts />
		</div>
	);
}

export default Profile;