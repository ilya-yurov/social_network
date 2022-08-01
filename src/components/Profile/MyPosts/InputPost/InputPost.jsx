import React, {useRef} from 'react';
import s from './InputPost.module.scss'
/* import { Field, reduxForm } from 'redux-form'; */

import {Field, Form, Formik, useFormik} from 'formik';
import {Box, Button, TextField, MenuItem} from '@material-ui/core';
import {object, string} from 'yup';
import {Stack} from '@mui/material';

/* const maxLength10 = maxLengthCreator(10); */

const InputPostForm = (props) => {
	const formikRef = useRef()
	const initialValues = {
		term: ''
	}
	/* const formik = useFormik({
		initialValues: {
			term: '',
		},
		onSubmit: (values, {setSubmitting}) => {
			props.onAddNewPost(values.term);
			alert(JSON.stringify(values, null, 2))
			formikRef.current.setSubmitting(false)
		}
	}) */
	return (
		<div className={s.formWrapper} >
			<Box height={20} />

			<Formik
				innerRef={formikRef}
				initialValues={initialValues}
				onSubmit={(values) => {
					props.onAddNewPost(values.term);
					alert(JSON.stringify(values, null, 2))
					formikRef.current.setSubmitting(false)
				}}
				validationSchema={object(
					{
						term: string().required('Please enter email')
						.max(200)
					})}
			>
				{({isSubmitting, values, handleChange}) => (
					<Form>
						<Stack
						spacing={1}
						alignItems='flex-end'
						>
							<Field
							fullWidth
							multiline
								type="text"
								name="term"
								as={TextField}
								variant='outlined'
								color='primary'
								label='Enter your post here...'
								value={values.term}
								onChange={handleChange} />
							<Button
							/* size='medium' */
								type="submit"
								variant='contained'
								color='primary'
								disabled={isSubmitting}
							>
								Add Post
							</Button>
						</Stack>
					</Form>
				)}
			</Formik>
		</div >
	);
}

/* const InputPostReduxForm = reduxForm({form: 'postInput'})(InputPostForm)

const InputPost = (props) => {
	
	const AddNewPost = (FormData) => {
		props.onAddNewPost(FormData.newPostText);
	}
	return (
		<div>
			<InputPostReduxForm onSubmit={AddNewPost} />
		</div>
	);
} */

export default InputPostForm;