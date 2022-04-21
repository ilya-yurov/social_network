import Header from './Header/Header';
import Input from './Input/Input';
import s from './MyPosts.module.scss'
import Post from './Post/Post';

let posts = [
	{message: "Hello, that's my first try of props usage!", id: 1, likes: "10"},
	{message: "I wanna have 99 likes at this post!", id: 2, likes: "99"},
	{message: "OMG he did it!!!", id: 3, likes: "999"}
]

let postElements = posts.map((p) => <Post message={p.message} id={p.id} likes ={p.likes} />)

const MyPosts = () => {
	return (
		<div>
			<div className={s.content__formWrapper}>
				<Header />
				<Input />
			</div>
			<div className={s.content__postWrapper}>
				{postElements}
			</div>
		</div>
	);
}
  
export default MyPosts;