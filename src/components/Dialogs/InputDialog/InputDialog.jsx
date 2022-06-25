import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormsContols';
import s from './InputDialog.module.scss'
import { maxLengthCreator, required } from '../../../utils/validators/validators';

const maxLength50 = maxLengthCreator(50);


const InputDialogForm = (props) => {
	return (
		<form className={s.content} onSubmit={props.handleSubmit}>
			<div className={s.content__formInput}>
				<Field name='dialogInputBody' buttonText='Send' component={Textarea} placeholder='Type your message...' validate={[required, maxLength50]}></Field>
			</div>
{/* 			<div className={s.content__formButton}>
				{<button>Send</button>}
			</div> */}
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