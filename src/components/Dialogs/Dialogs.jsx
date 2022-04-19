import s from './Dialogs.module.scss'

const Dialogs = (props) => {
	return (
		<div className={s.content}>
			<div className={s.content__dialogs}>
				<div className={s.content__dialog}>Victor</div>
				<div className={s.content__dialog}>Nadya</div>
				<div className={`${s.content__dialog} ${s.content__dialog_active}`}>Irina</div>
				<div className={s.content__dialog}>Ilya</div>
				<div className={s.content__dialog}>John</div>
				<div className={s.content__dialog}>Petya</div>
				<div className={s.content__dialog}>Valentina</div>
			</div>
			<div className={s.content__messages}>
				<div className={s.content__message}>Hi there!</div>
				<div className={s.content__message}>How are you?</div>
				<div className={`${s.content__message} ${s.content__message_active}`}>OMG!</div>
				<div className={s.content__message}>Wanna walk outside?</div>
				<div className={s.content__message}>I'm so sad :(</div>
				<div className={s.content__message}>:D</div>
				<div className={s.content__message}>Hmm... just ignore you...</div>
			</div>
		</div>
	)
}

export default Dialogs;