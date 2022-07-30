import React from 'react';
import {Field, Form, Formik, useFormik} from 'formik';
import {Box, Button, TextField, MenuItem} from '@material-ui/core';
import s from './UsersSearchForm.module.scss'

export const usersSearchFormValidate = () => {
	const values = () => {
		const errors = {};
		return errors;
	}
}

export const UsersSearchForm = ({setFilter, filter}) => {

	let {term:currentTermValue, status:currentStatusValue} = filter

	const formik = useFormik({
		initialValues: {
			term: currentTermValue,
			status: currentStatusValue,
		},
		onSubmit: (values, {setSubmitting}) => {
			setFilter(values);
			setSubmitting(false)
		}
	})
		return(
		<div className = {s.formWrapper} >
			<Box height={20} />
			<h1>Find your friend:</h1>
			<Box height={20} />

			<Formik
				initialValues={formik.values}
				validate={usersSearchFormValidate}
				onSubmit={formik.handleSubmit}
			>
				{({isSubmitting}) => (
					<Form>
						<Field
							fullWidth
							type="text"
							name="term"
							as={TextField}
							variant='outlined'
							color='primary'
							label='Name'
							value={formik.values.term}
							onChange={formik.handleChange} />

						<Field
							as={TextField}
							type="checkbox"
							style={{width: "300px"}}
							variant="outlined"
							name="status"
							value={formik.values.status}
							onChange={formik.handleChange}
							select
							label="Status">
							<MenuItem value={'null'}>All</MenuItem>
							<MenuItem value={'true'}>Only followed</MenuItem>
							<MenuItem value={'false'}>Only unfollowed</MenuItem>
						</Field>

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
		</div >
	);
};
