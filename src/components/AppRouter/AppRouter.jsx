import React from 'react'
import DialogsContainer from '../Dialogs/DialogsContainer';
import LoginContainer from '../Login/LoginContainer';
import ProfileContainer from '../Profile/ProfileContainer';
import UsersContainer from '../Users/UsersContainer';
import StartPage from '../StartPage/StartPage';
import ErrorPage from '../ErrorPage/ErrorPage';
import { Route, Routes } from 'react-router-dom';
import SettingsPage from '../SettingsPage/SettingsPage';
import NewsPage from '../NewsPage/NewsPage';
import MusicPage from '../MusicPage/MusicPage';

const AppRouter = (props) => {
	return (
		<div> 
			<Routes>
				<Route path='/' element={<StartPage />} />
				<Route path='/profile/:userId' element={<ProfileContainer />} />
				<Route path='/profile' element={<ProfileContainer />} />
				<Route path='/dialogs/*' element={<DialogsContainer />} />
				<Route path='/users/*' element={<UsersContainer />} />
				<Route path='/login' element={<LoginContainer />} />
				<Route path='/news' element={<NewsPage />} />
				<Route path='/music' element={<MusicPage />} />
				<Route path='/settings' element={<SettingsPage />} />
				<Route path='/*' element={<ErrorPage />} />
			</Routes>
		</div>
	);
};

export default AppRouter;