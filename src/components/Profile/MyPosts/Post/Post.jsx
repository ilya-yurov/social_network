import s from './Post.module.scss'


const Post = (props) => {
	return (

		<div className={s.content__post}>
			<div className={s.content__postIcon}>
			</div>
			<div className={s.content__postText}>
				{props.message}
			</div>
			<div className={s.content__like}>
				<img src="https://avatars.mds.yandex.net/i?id=e8faafe524a572a80e84d8064eea2108-5708463-images-thumbs&n=13&exp=1" alt="" />
			</div>
			<div className={s.content__count}>
				{props.likes}
			</div>
		</div>
			);
}

			export default Post;