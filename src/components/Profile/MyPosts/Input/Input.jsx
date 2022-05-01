import React from 'react';
import s from './Input.module.scss'


const Input = (props) => {
	let newPostElement = React.useRef();
	let addNewPost = () => {
		let text = newPostElement.current.value;
		props.addPost(text);
		props.updateNewPostText("");
	}
	let updateNewText = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	}
	return (
		<div className={s.content}>
			<div className={s.content__formInput}>
				<textarea onChange={updateNewText} ref={newPostElement} placeholder='your news...' value={props.newPostText}></textarea>
			</div>
			<div className={s.content__formButton}>
				<button onClick={addNewPost}>Send</button>
			</div>
		</div>
	);
}

export default Input;