/* import { Field, reduxForm } from 'redux-form'; */
import s from './Login.module.scss';
import {Field, Form, Formik} from 'formik';
import {Box, Button, Checkbox, FormControlLabel, TextField, Typography} from '@mui/material';
import {Navigate} from 'react-router-dom';
import {object, string} from 'yup'
import {useRef} from 'react';
import React from 'react';
import {Alert} from '@mui/material';

export const Login = ({loginUser, isAuth}) => {

	const formikRef = useRef()

	const initialValues = {
		email: '',
		password: '',
		rememberMe: false
	}

	if (!isAuth) {
		return (
			<div data-testid="login-page" className={s.formWrapper} >
				<Box height={20} />
				<Typography variant="h6" component="div">LOGIN:</Typography>
				<Box height={20} />

				<Formik
					initialValues={initialValues}
					innerRef={formikRef}
					validationSchema={object(
						{
							email: string().required('Please enter email')
								.email('Invalid email'),
							password: string().required('Please enter password')
						})}
					onSubmit={(values, {setStatus}) => {
						loginUser(values, setStatus, formikRef.current.setSubmitting);
					}}
				>

					{({isSubmitting, errors, touched, status, values, handleChange}) => (
						<Form>
							<Field
								fullWidth
								type="email"
								name="email"
								as={TextField}
								variant='filled'
								color='primary'
								label='Email'
								error={Boolean(errors.email) && Boolean(touched.email)}
								helperText={Boolean(touched.email) && errors.email}
								value={values.email}
								onChange={handleChange} />
							<Box height={15} />
							<Field
								fullWidth
								type="password"
								name="password"
								as={TextField}
								variant='filled'
								color='primary'
								label='Password'
								error={Boolean(errors.password) && Boolean(touched.password)}
								helperText={Boolean(touched.password) && errors.password}
								value={values.password}
								onChange={handleChange} />
							<Box height={15} />
							<div className={s.formWrapper__bottom}>
								<FormControlLabel
									control={<Checkbox checked={values.rememberMe} color='primary'/>}
									label="remember me"
									name="rememberMe"
									onChange={handleChange}
								/>
								<Button
									type="submit"
									variant='contained'
									color='primary'
									disabled={isSubmitting}
								>
									Login
								</Button>
							</div>
							<Box height={15} />
							{status &&
								<div>
									<Alert severity='error'>API Error: {status.error}</Alert> 
								</div>
							}
						</Form>
					)}
				</Formik>

			</div >
		)
	} else {
		return <Navigate to={'/profile'} />
	}
};
export default Login;
