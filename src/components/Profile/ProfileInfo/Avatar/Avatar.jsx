import s from './Avatar.module.scss'


const Avatar = (props) => {
	return (
		<div className={s.content__avatar}>
			{!props.photo ? <img
				src={"https://thunderbird-mozilla.ru/images/big-images/kak-dobavit-uchetnuyu-zapis-v-mozilla-thunderbird/kak-dobavit-uchetnuyu-zapis-v-mozilla-thunderbird.jpg"}
				alt={'User'}
			>
			</img>
				:
				<img src={props.photo} alt={'User'}></img>}
		</div>
	)
}

export default Avatar