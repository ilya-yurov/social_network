import React from 'react'
import DialogsContainer from '../Dialogs/DialogsContainer'
import LoginContainer from '../Login/LoginContainer'
import ProfileContainer from '../Profile/ProfileContainer'
import UsersContainer from '../Users/UsersContainer'
import ErrorPage from '../ErrorPage/ErrorPage'
import {Route, Routes} from 'react-router-dom'
import StartPageContainer from '../StartPage/StartPageContainer'
import MusicPageContainer from '../MusicPage/MusicPageContainer'
import NewsPageContainer from '../NewsPage/NewsPageContainer'
import SettingsPageContainer from '../SettingsPage/SettingsPageContainer'

const AppRouter = (props) => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<StartPageContainer />} />
				<Route path='/profile/:userId' element={<ProfileContainer />} />
				<Route path='/profile' element={<ProfileContainer />} />
				<Route path='/dialogs/*' element={<DialogsContainer />} />
				<Route path='/users/*' element={<UsersContainer />} />
				<Route path='/login' element={<LoginContainer />} />
				<Route path='/news' element={<NewsPageContainer />} />
				<Route path='/music' element={<MusicPageContainer />} />
				<Route path='/settings' element={<SettingsPageContainer />} />
				<Route path='/*' element={<ErrorPage />} />
			</Routes>
		</div>
	)
}

export default AppRouter