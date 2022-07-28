import React from 'react';
import {Field, Form, Formik, useFormik} from 'formik';
import {Box, Button, TextField, Select, FormControl, InputLabel, MenuItem} from '@material-ui/core';
import s from './UsersSearchForm.module.scss'

export const usersSearchFormValidate = () => {
	const values = () => {
		const errors = {};
		return errors;
	}
}

export const UsersSearchForm = ({setFilter}) => {

	const formik = useFormik({
		initialValues: {
			term: '',
			status: 'All',
		},
		onSubmit: (values, {setSubmitting}) => {
			setFilter(values);
			alert(JSON.stringify(values, null, 2));

			setSubmitting(false)
		}
	})

		return(
		<div className = {s.formWrapper} >
			<Box height={20} />
			<h1>Find your friend:</h1>
			<Box height={20} />

			<Formik
				initialValues={{term: '', }}
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
							style={{width: "300px"}}
							variant="outlined"
							name="status"
							value={formik.values.status}
							onChange={formik.handleChange}
							select
							label="Status">
							<MenuItem value={"All"}>All</MenuItem>
							<MenuItem value={"Only followed"}>Only followed</MenuItem>
							<MenuItem value={"Only unfollowed"}>Only unfollowed</MenuItem>
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
