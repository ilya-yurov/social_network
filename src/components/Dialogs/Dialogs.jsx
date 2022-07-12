import { useState } from 'react'
import Dialog from './Dialog/Dialog'
import s from './Dialogs.module.scss'
import InputDialog from './InputDialog/InputDialog'
import Message from './Message/Message'

const Dialogs = (props) => {

	const [dialogs, setDialogs] = useState(props.dialogs);

	const activeToogle = (id) => {
		console.trace();
		const newDialogs = dialogs.map(dialog => {
			if(dialog.id === id)
				return {...dialog, active: 1};
			else
				return {...dialog, active: 0};
		})
		setDialogs(newDialogs);
	}
	
	let dialogElements = dialogs.map( (d) => <Dialog activeToogle={activeToogle} name={d.name} id={d.id} key={d.id} active={d.active}/>)
	let messageElements = props.messages.map( (m) => <Message  message={m.message} id={m.id} key={m.id} active={m.active}/>)
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
				<InputDialog onSendMessage={props.sendMessage}/>
			</div>
	)
}



export default Dialogs;