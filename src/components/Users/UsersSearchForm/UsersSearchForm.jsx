import React from 'react';
import {Field, Form, Formik} from 'formik';
import {Box, Button, TextField} from '@material-ui/core';
import s from './UsersSearchForm.module.scss'

export const usersSearchFormValidate = () => {
	const values = () => {
		const errors = {};
		return errors;
	}
}

export const UsersSearchForm = ({setFilter}) => {
	console.log(setFilter);

	const submit = (values, {setSubmitting}) => {
		setFilter(values.term);
		setSubmitting(false)
	};

	return (
		<div className={s.formWrapper}>
			<Box height={20} />
			<h1>Find your friend:</h1>
			<Box height={20} />

			<Formik
				initialValues={{term: '', }}
				validate={usersSearchFormValidate}
				onSubmit={submit}
			>
				{({isSubmitting}) => (
					<Form>
						<Field
							type="text"
							name="term"
							as={TextField}
							variant='outlined'
							color='primary'
							label='Name' />

						<Button
							type="submit"
							variant='contained'
							color='primary'
							disabled={isSubmitting}
						>
							Find
						</Button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
