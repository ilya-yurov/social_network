import { NavLink } from "react-router-dom";
import s from "./Message.module.scss"


const Message = (props) => {
	if (props.active == 1) {
		return (
			<div className={`${s.message} ${s.message_active}`}>{props.message}</div>
		)
	} else {
		return (
			<div className={s.message}>{props.message}</div>
		)
	}
}

export default Message;