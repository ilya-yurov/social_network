import MyPosts from './MyPosts/MyPosts';
import Wallpaper from './Wallpaper/Wallpaper';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	return (
		<div>
			<Wallpaper />
			<ProfileInfo/>
			<MyPosts posts={props.posts} newPostText={props.newPostText} dispatch={props.dispatch} /* addPost={props.addPost}  updateNewPostText={props.updateNewPostText} */ />
		</div>
	);
}

export default Profile;