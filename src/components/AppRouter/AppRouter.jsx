import React from 'react'
import DialogsContainer from '../Dialogs/DialogsContainer';
import LoginContainer from '../Login/LoginContainer';
import ProfileContainer from '../Profile/ProfileContainer';
import UsersContainer from '../Users/UsersContainer';
import ErrorPage from '../ErrorPage/ErrorPage';
import { Route, Routes } from 'react-router-dom';
import SettingsPage from '../SettingsPage/SettingsPage';
import NewsPage from '../NewsPage/NewsPage';
import MusicPage from '../MusicPage/MusicPage';
import StartPageContainer from '../StartPage/StartPageContainer';
import StartPage from '../StartPage/StartPage';
import MusicPageContainer from '../MusicPage/MusicPageContainer';
import NewsPageContainer from '../NewsPage/NewsPageContainer';
import SettingsPageContainer from '../SettingsPage/SettingsPageContainer';

const AppRouter = (props) => {
	return (
		<div> 
			<Routes>
				<Route path='/' element={<StartPageContainer />} /> //done
				<Route path='/profile/:userId' element={<ProfileContainer />} /> //done
				<Route path='/profile' element={<ProfileContainer />} /> //done
				<Route path='/dialogs/*' element={<DialogsContainer />} /> //done
				<Route path='/users/*' element={<UsersContainer />} /> //done
				<Route path='/login' element={<LoginContainer />} /> //done
				<Route path='/news' element={<NewsPageContainer />} /> //done
				<Route path='/music' element={<MusicPageContainer />} /> //done
				<Route path='/settings' element={<SettingsPageContainer />} /> //done
				<Route path='/*' element={<ErrorPage />} />
			</Routes>
		</div>
	);
};

export default AppRouter;