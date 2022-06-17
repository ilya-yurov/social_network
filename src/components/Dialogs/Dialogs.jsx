import { Navigate } from 'react-router-dom'
import Dialog from './Dialog/Dialog'
import s from './Dialogs.module.scss'
import InputDialog from './InputDialog/InputDialog'
import Message from './Message/Message'

const Dialogs = (props) => {
	let dialogElements = props.dialogs.map( (d) => <Dialog name={d.name} id={d.id} key={d.id} active={d.active}/>)
	let messageElements = props.messages.map( (m) => <Message  message={m.message} id={m.id} key={m.id} active={m.active}/>)
	if (!props.isAuth) return <Navigate to={'/login'} />
	return (
			<div className={s.wrapper}>
				<div className={s.content}>
					<div className={s.content__dialogs}>
						{dialogElements}
					</div>
					<div className={s.content__messages}>
						{messageElements}
					</div>
				</div>
				<InputDialog onSendMessage={props.sendMessage} onNewMessageText={props.updateDialogText} newDialogText={props.newDialogText}/>
			</div>
	)
}



export default Dialogs;