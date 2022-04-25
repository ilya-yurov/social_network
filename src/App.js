import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';


const App = (props) => {			//тег <App/>
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Navbar />
			<div className='app-wrapper__content'>
				<Routes>
					<Route path='/dialogs/*' element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
					<Route path='/profile/*' element={<Profile posts={props.posts}/>}/>
				</Routes>
			</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
}
//? Странно, но почему-то компоненту в camelCase не хочет вызывать как тег

export default App;
