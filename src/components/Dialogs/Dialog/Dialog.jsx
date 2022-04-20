import { NavLink } from "react-router-dom";
import s from "./Dialog.module.scss"

const Dialog = (props) => {

	const path = `/dialogs/${props.id}`;

	if (props.active == 1) {
		return (
			<div className={`${s.dialog} ${s.dialog_active}`}>
				<NavLink to={path}>{props.name}</NavLink>
			</div>
		)
	} else {
		return (
			<div className={s.dialog}>
				<NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
			</div>
		)
	}
}

export default Dialog;