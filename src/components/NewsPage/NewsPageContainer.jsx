import React from 'react'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import NewsPage from './NewsPage'

const NewsPageContainer = () => {
	return (
		<div>
			<NewsPage />
		</div>
	)
}

export default withAuthRedirect(NewsPageContainer)