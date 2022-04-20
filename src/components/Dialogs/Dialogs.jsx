import { NavLink } from 'react-router-dom';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import s from './Dialogs.module.scss'

const Dialogs = (props) => {
	return (
		<div className={s.content}>
			<div className={s.content__dialogs}>
				<Dialog name="Victor" id="1" />
				<Dialog name="Nadya" id="2" />
				<Dialog name="Irina" id="3" active="1" />
				<Dialog name="Ilya" id="4" />
				<Dialog name="John" id="5" />
				<Dialog name="Petya" id="6" />
				<Dialog name="Valentina" id="7" />
			</div>
			<div className={s.content__messages}>
				<Message message="Hi there!" />
				<Message message="How are you?" />
				<Message message="OMG!" active="1" />
				<Message message="Wanna walk outside?"  />
				<Message message="I'm so sad :(" />
				<Message message=":D" />
				<Message message="Hmm... just ignore you..." />
			</div>
		</div>
	)
}

export default Dialogs;