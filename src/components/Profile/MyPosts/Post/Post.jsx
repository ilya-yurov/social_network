import s from './Post.module.scss'


const Post = () => {
	return (

		<div className={s.content__post}>
			<div className={s.content__postIcon}>
			</div>
			<div className={s.content__postText}>
				Guys, anybody like me?
			</div>
		</div>
			);
}

			export default Post;