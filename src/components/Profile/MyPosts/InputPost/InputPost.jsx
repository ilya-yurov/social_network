import React, {useRef} from 'react'
import s from './InputPost.module.scss'
import {Field, Form, Formik, useFormik} from 'formik'
import {Box, Button, TextField, MenuItem} from '@material-ui/core'
import {object, string} from 'yup'
import {Stack} from '@mui/material'

const InputPostForm = (props) => {
	const formikRef = useRef()
	const initialValues = {
		term: ''
	}

	return (
		<div className={s.formWrapper} >
			<Box height={20} />

			<Formik
				innerRef={formikRef}
				initialValues={initialValues}
				onSubmit={(values, {resetForm}) => {
					props.onAddNewPost(values.term);
					resetForm(initialValues)
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

export default InputPostForm