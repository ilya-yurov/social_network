import React from 'react';
import s from './InputDialog.module.scss'

const InputDialog = (props) => {

let newPostElement = React.useRef();
let sendMessage = () => {
	let text = newPostElement.current.value;
	alert(text);
	props.updateDialogText("");
};

let newMessageText = () => {
	let text = newPostElement.current.value;
	console.log(text);
	props.updateDialogText(text);
	debugger;
}

	return (
		<div>
			<div className={s.content__formInput}>
				<textarea onChange={newMessageText} ref={newPostElement} placeholder='Type your message...' value={props.newDialogText}></textarea>
			</div>
			<div className={s.content__formButton}>
				{<button onClick={sendMessage}>Send</button>}
			</div>
		</div>
	)
}

export default InputDialog;