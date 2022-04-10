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
				<Post message="Hello, that's my first try of props usage!" likes = "10" />
				<Post message="I wanna have 99 likes at this post!" likes = "99" />
				<Post message="OMG he did it!!!" likes = "999" />
			</div>
		</div>
	);
}

export default MyPosts;