import s from './scss/Profile.module.scss'


const Profile = () => {
	return (
		<div className={s.content}>
			<div className={s.content__img}>
				<img src='https://i.ytimg.com/vi/uKntdthpcCY/maxresdefault.jpg'></img>
			</div>
			<div className={s.content__infoWrapper}>
				<div className={s.content__avatar}>
					<img src='https://petshoper.com/wp-content/uploads/2020/01/Top-10-Most-Popular-Dog-Breeds.jpg'></img>
				</div>
				<div className={s.content__description}>
					<p>Dmitry K.</p>
					<p>Date of Birth: 2 january</p>
					<p>City: Minsk</p>
					<p>Education: BSU'11</p>
					<p>Web Site: https://it-kamasutra.com</p>
				</div>
			</div>
			<div className={s.content__formWrapper}>
				<div className={s.content__formHeader}>
					My posts
				</div>
				<div className={s.content__formInput}>
					<textarea placeholder='your news...'></textarea>
				</div>
				<div className={s.content__formButton}>
					<button>Send</button>
				</div>
			</div>
			<div className={s.content__postWrapper}>
				<div className={s.content__firstPost}>
					<div className={s.content__postIcon}>
					</div>
					<div className={s.content__postText}>
						Guys, anybody like me?
					</div>
				</div>
				<div className={s.content__secondPost}>
					<div className={s.content__postIcon}>
					</div>
					<div className={s.content__postText}>
						Please, subscribe to my page!
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;