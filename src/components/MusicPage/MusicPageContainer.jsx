import React from 'react'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import MusicPage from './MusicPage'

const MusicPageContainer = () => {
	return (
		<div>
			<MusicPage/>
		</div>
	)
}

export default withAuthRedirect(MusicPageContainer)