import { NavLink } from 'react-router-dom';
import s from './Friend.module.scss'

const Friend = (props) => {
return (
		<div className={s.friend}>
			<div className={s.friend__avatar}></div>
			<div className={s.friend__name}>{props.name}</div>
		</div>
	);
}

export default Friend;