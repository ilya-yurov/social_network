import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Footer from './components/Footer/Footer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';


const App = (props) => {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<HeaderContainer />
				<Navbar state={props.state.sidebar}/>
			<div className='app-wrapper__content'>
				<Routes>
					<Route path='/profile/:userId' element={<ProfileContainer/>}/>
					<Route path='/profile' element={<ProfileContainer/>}/>
					<Route path='/dialogs/*' element={<DialogsContainer/>}/>
					<Route path='/users/*' element={<UsersContainer/>}/>
					<Route path='/login' element={<Login/>}/>
				</Routes>
			</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
