
const Profile = () => {
	return (
		<div className='content'>
			<div className='content__img'>
				<img src='https://i.ytimg.com/vi/uKntdthpcCY/maxresdefault.jpg'></img>
			</div>
			<div className='content__info-wrapper'>
				<div className='content__avatar'>
					<img src='https://petshoper.com/wp-content/uploads/2020/01/Top-10-Most-Popular-Dog-Breeds.jpg'></img>
				</div>
				<div className='content__description'>
					<p>Dmitry K.</p>
					<p>Date of Birth: 2 january</p>
					<p>City: Minsk</p>
					<p>Education: BSU'11</p>
					<p>Web Site: https://it-kamasutra.com</p>
				</div>
			</div>
			<div className='content__form-wrapper'>
				<div className='content__form-header'>
					My posts
				</div>
				<div className='content__form-input'>
					<textarea className='forma' placeholder='your news...'></textarea>
				</div>
				<div className='content__form-button'>
					<button>Send</button>
				</div>
			</div>
			<div className='content__post-wrapper'>
				<div className='content__first-post'>
					<div className='content__post-icon'>
					</div>
					<div className='content__post-text'>
						Guys, anybody like me?
					</div>
				</div>
				<div className='content__second-post'>
					<div className='content__post-icon'>
					</div>
					<div className='content__post-text'>
						Please, subscribe to my page!
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;