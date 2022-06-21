import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './InputDialog.module.scss'

const InputDialogForm = (props) => {
	return (
		<form className={s.content} onSubmit={props.handleSubmit}>
			<div className={s.content__formInput}>
				<Field name='dialogInputBody' component='textarea' placeholder='Type your message...'></Field>
			</div>
			<div className={s.content__formButton}>
				{<button>Send</button>}
			</div>
		</form>
	)
}

const InputDialogReduxForm = reduxForm({form: 'inputDialog'})(InputDialogForm)

const InputDialog = (props) => {

	const SendMessage = (FormData) => {
		props.onSendMessage(FormData.dialogInputBody);
	};

	return (
		<div>
			<InputDialogReduxForm onSubmit={SendMessage}/>
		</div>
	)
}

export default InputDialog;