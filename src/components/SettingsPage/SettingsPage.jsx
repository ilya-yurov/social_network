import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './SettingsPage.module.scss'

const SettingsPage = (props) => {
	return (
		<div className={s.settingsPage}>
			<h1 className={s.settingsPage__header}>
				SETTINGS PAGE
			</h1>
		</div>
	);
};

export default SettingsPage;