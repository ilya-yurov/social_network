import React from 'react'
import { NavLink } from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import MusicPage from './MusicPage';
import s from './MusicPage.module.scss'

const MusicPageContainer = () => {
	return (
		<div>
			<MusicPage/>
		</div>
	);
};

export default withAuthRedirect(MusicPageContainer);