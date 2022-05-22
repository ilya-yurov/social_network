import Header from './Header/Header';
import Input from './Input/Input';
import InputContainer from './Input/InputContainer';
import s from './MyPosts.module.scss'
import Post from './Post/Post';

const MyPosts = (props) => {
	let postElements = props.posts.map((p) => <Post message={p.message} id={p.id} likes ={p.likes} />)
	return (
		<div>
			<div className={s.content__formWrapper}>
				<Header />
				<InputContainer store={props.store}/>
			</div>
			<div className={s.content__postWrapper}>
				{postElements}
			</div>
		</div>
	);
}

export default MyPosts;