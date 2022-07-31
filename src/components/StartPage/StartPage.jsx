import {Button} from '@material-ui/core';
import React from 'react'
import {NavLink} from 'react-router-dom';
import s from './StartPage.module.scss'


const StartPage = ({isAuth, router}) => {

	const isAuthRedirect = () => {
		setTimeout(() => {
			router.navigate('/login')
		}, 5000)
	}

	return (
		<div className={s.startPage} data-testid='start-page'>
			<h1 className={s.startPage__header}>
				START PAGE
			</h1>
			<div>
				<p>Wellcome to Socical network homepage.</p>
				{!isAuth && 
				<>
				<p>Please <Button variant='contained' color='primary'><NavLink to='/login'>Login</NavLink></Button> first!</p>
				<p><span>You will be redirect on login page automaticly after 5 seconds</span></p>
				{isAuthRedirect()}
				</>
				}
			</div>
		</div>
	);
};

export default StartPage;