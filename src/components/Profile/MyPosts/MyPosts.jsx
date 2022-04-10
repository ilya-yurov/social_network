import Header from './Header/Header';
import Input from './Input/Input';
import s from './MyPosts.module.scss'
import Post from './Post/Post';


const MyPosts = () => {
	return (
		<div>
			<div className={s.content__formWrapper}>
				<Header />
				<Input />
			</div>
			<div className={s.content__postWrapper}>
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
			</div>
		</div>
	);
}

export default MyPosts;