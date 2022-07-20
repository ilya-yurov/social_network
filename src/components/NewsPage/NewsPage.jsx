import React from 'react'
import s from './NewsPage.module.scss'

const NewsPage = (props) => {
	return (
		<div className={s.newsPage}>
			<h1 className={s.newsPage__header}>
				NEWS PAGE
			</h1>
		</div>
	);
};

export default NewsPage;