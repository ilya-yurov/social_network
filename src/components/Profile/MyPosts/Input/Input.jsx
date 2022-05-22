import React from 'react';
import s from './Input.module.scss'

const Input = (props) => {
	let newPostElement = React.useRef();
	let onAddNewPost = () => {
		let text = newPostElement.current.value;
		props.onAddNewPost(text);
		props.onUpdateNewPostText('');
	}
	let onUpdateNewPostText = () => {
		let text = newPostElement.current.value;
		props.onUpdateNewPostText(text);
	}
	return (
		<div className={s.content}>
			<div className={s.content__formInput}>
				<textarea onChange={onUpdateNewPostText} ref={newPostElement} placeholder='your news...' value={props.newPostText}></textarea>
			</div>
			<div className={s.content__formButton}>
				<button onClick={onAddNewPost}>Send</button>
			</div>
		</div>
	);
}

export default Input;