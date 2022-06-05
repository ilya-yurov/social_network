import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';


const App = (props) => {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Navbar state={props.state.sidebar}/>
			<div className='app-wrapper__content'>
				<Routes>
					<Route path='/dialogs/*' element={<DialogsContainer/>}/>
					<Route path='/profile/*' element={<ProfileContainer/>}/>
					<Route path='/users/*' element={<UsersContainer/>}/>
				</Routes>
			</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
