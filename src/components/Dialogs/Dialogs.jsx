import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import s from './Dialogs.module.scss'

let dialogs = [
	{name: 'Victor', id: 1, active: 0},
	{name: 'Nadya', id: 2, active: 0},
	{name: 'Irina', id: 3, active: 1},
	{name: 'Ilya', id: 4, active: 0},
	{name: 'John', id: 5, active: 0},
	{name: 'Petya', id: 6, active: 0},
	{name: 'Valentina', id: 7, active: 0}
]
let messages = [
	{message: 'Hi there!', id: 1, active: 0},
	{message: 'How are you?', id: 2, active: 0},
	{message: 'Wanna walk outside?', id: 3, active: 1},
	{message: 'I\'m so sad :(', id: 4, active: 0},
	{message: ':D', id: 5, active: 0},
	{message: 'Hmm... just ignore you...', id: 6, active: 0},
	{message: 'Californicaaaaaaation!!!', id: 7, active: 0}
]
let dialogElements = dialogs.map( (d) => <Dialog name={d.name} id={d.id} active={d.active}/>)
let messageElements = messages.map( (m) => <Message  message={m.message} id={m.id} active={m.active}/>)

const Dialogs = (props) => {
	return (
		<div className={s.content}>
			<div className={s.content__dialogs}>
				{dialogElements}
			</div>
			<div className={s.content__messages}>
				{messageElements}
			</div>
		</div>
	)
}

export default Dialogs;