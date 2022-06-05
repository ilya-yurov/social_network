import s from './Avatar.module.scss'


const Avatar = (props) => {
	return (
		<div className={s.content__avatar}>
			<img src={props.photo}></img>
		</div>
	);
}

export default Avatar;