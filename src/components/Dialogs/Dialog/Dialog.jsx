import { NavLink } from "react-router-dom";
import s from "./Dialog.module.scss"

const Dialog = (props) => {

	const path = `/dialogs/${props.id}`;

	const activeToogle = () => {
		props.activeToogle(props.id);
	}

	if (props.active == 1) {
		return (
			<div className={`${s.dialog} ${s.dialog_active}`}>
				<button onClick={activeToogle}>
					<NavLink to={path}>{props.name}</NavLink>
				</button>
			</div>
		)
	} else {
		return (
			<div className={s.dialog}>
				<button onClick={activeToogle}>
					<NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
				</button>
			</div>
		)
	}
}

export default Dialog;