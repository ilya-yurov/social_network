import React from 'react'
import { NavLink } from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import NewsPage from './NewsPage';

const NewsPageContainer = () => {
	return (
		<div>
			<NewsPage/>
		</div>
	);
};

export default withAuthRedirect(NewsPageContainer);