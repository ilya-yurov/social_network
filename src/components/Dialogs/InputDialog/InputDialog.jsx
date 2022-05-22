import React from 'react';
import { sendMessageActionCreator, updateDialogTextActionCreator } from '../../../redux/dialogsReducer';
import s from './InputDialog.module.scss'


const InputDialog = (props) => {
// e - event
let sendMessage = (e) => {
	props.dispatch(sendMessageActionCreator());
};

let newMessageText = (e) => {
	let text = e.target.value;
	props.dispatch(updateDialogTextActionCreator(text));
}
	return (
		<div>
			<div className={s.content__formInput}>
				<textarea onChange={newMessageText}  placeholder='Type your message...' value={props.newDialogText}></textarea>
			</div>
			<div className={s.content__formButton}>
				{<button onClick={sendMessage}>Send</button>}
			</div>
		</div>
	)
}

export default InputDialog;