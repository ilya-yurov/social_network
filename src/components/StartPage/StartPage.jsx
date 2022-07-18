import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './StartPage.module.scss'

const StartPage = (props) => {
	return (
		<div className={s.startPage}>
			<h1 className={s.startPage__header}>
				START PAGE
			</h1>
			<div>
				<p>Wellcome to <span>Sosical network</span> homepage.</p>
				<p>Please <button><NavLink to='/login'>Login</NavLink></button> first!</p>
			</div>
		</div>
	);
};

export default StartPage;