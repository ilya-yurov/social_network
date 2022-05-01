import { NavLink } from 'react-router-dom';
import Friend from './Friend/Friend';
import s from './Friends.module.scss'

const Friends = (props) => {
	let friendsList = props.state.map((p) => <Friend name={p.name} id={p.id} />)
	return (
		<div>
			<div className={s.friends__header}>
				Friends
			</div>
			<div className={s.friends__profiles}>
				{friendsList}
			</div>
		</div>
	);
}

export default Friends;