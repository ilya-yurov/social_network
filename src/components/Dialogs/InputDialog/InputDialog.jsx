import React from 'react';
import s from './InputDialog.module.scss'


const InputDialog = (props) => {
// e - event
let onSendMessage = (e) => {
	props.onSendMessage();
};

let onNewMessageText = (e) => {
	let text = e.target.value;
	props.onNewMessageText(text);
}
	return (
		<div>
			<div className={s.content__formInput}>
				<textarea onChange={onNewMessageText}  placeholder='Type your message...' value={props.newDialogText}></textarea>
			</div>
			<div className={s.content__formButton}>
				{<button onClick={onSendMessage}>Send</button>}
			</div>
		</div>
	)
}

export default InputDialog;