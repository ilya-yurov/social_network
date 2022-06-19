import s from './Avatar.module.scss'


const Avatar = (props) => {
	return (
		<div className={s.content__avatar}>
			{!props.photo ? <img src={"https://thunderbird-mozilla.ru/images/big-images/kak-dobavit-uchetnuyu-zapis-v-mozilla-thunderbird/kak-dobavit-uchetnuyu-zapis-v-mozilla-thunderbird.jpg"}></img> : <img src={props.photo}></img>}
		</div>
	);
}

export default Avatar;