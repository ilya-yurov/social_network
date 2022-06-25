import React from 'react';
import s from './InputPost.module.scss'
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../../utils/validators/validators';
import { Textarea } from '../../../common/FormsControls/FormsContols';

const maxLength10 = maxLengthCreator(10);

const InputPostForm = (props) => {
	return (
		<form  className={s.content} onSubmit={props.handleSubmit}>
			<div className={s.content__formInput}>
				<Field placeholder='Your news...' name={'newPostText'} buttonText='Post' component={Textarea} validate={[required, maxLength10]}/>
			</div>

		</form>
	)
}

const InputPostReduxForm = reduxForm({form: 'postInput'})(InputPostForm)

const InputPost = (props) => {
	
	const AddNewPost = (FormData) => {
		props.onAddNewPost(FormData.newPostText);
	}
	return (
		<div>
			<InputPostReduxForm onSubmit={AddNewPost} />
		</div>
	);
}

export default InputPost;