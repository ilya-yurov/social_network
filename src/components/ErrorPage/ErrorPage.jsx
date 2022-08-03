import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './ErrorPage.module.scss'

const ErrorPage = (props) => {
	return (
		<div className={s.errorPage}>
			<h1 className={s.errorPage__header}>
				ERROR PAGE
			</h1>
			<div>
				<p><span>ERROR!</span> <p>Page not found!</p></p>
			</div>
		</div>
	);
};

export default ErrorPage