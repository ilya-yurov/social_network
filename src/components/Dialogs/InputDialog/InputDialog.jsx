import React, {useRef} from 'react'
import s from './InputPost.module.scss'
import {Field, Form, Formik} from 'formik'
import {Box, Button, TextField} from '@material-ui/core'
import {Stack} from '@mui/material'


const InputPostForm = ({onSendMessage}) => {
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
					onSendMessage(values.term)
					resetForm(initialValues)
					formikRef.current.setSubmitting(false)
				}}
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
								label='Enter your message here...'
								value={values.term}
								onChange={handleChange} />
							<Button
								type="submit"
								variant='contained'
								color='primary'
								disabled={isSubmitting}
							>
								SEND
							</Button>
						</Stack>
					</Form>
				)}
			</Formik>
		</div >
	)
}

export default InputPostForm