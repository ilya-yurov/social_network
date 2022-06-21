import React from 'react';
import s from './Input.module.scss'
import { Field, reduxForm } from 'redux-form';



const InputPostForm = (props) => {
	return (
		<form  className={s.content} onSubmit={props.handleSubmit}>
			<div className={s.content__formInput}>
				<Field placeholder={'your news...'} name={'text'} component={'textarea'}/>
			</div>
			<div className={s.content__formButton}>
				<button>Send</button>
			</div>
		</form>
	)
}

const InputPostReduxForm = reduxForm({form: 'postInput'})(InputPostForm)

const InputPost = (props) => {
	
	const AddNewPost = (FormData) => {
		props.onAddNewPost(FormData.text);
	}
	return (
		<div>
			<InputPostReduxForm onSubmit={AddNewPost} />
		</div>
	);
}

export default InputPost;