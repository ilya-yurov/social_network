import './App.scss';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';


const App = () => {			//тег <App/>
	return (
		<div className='app-wrapper'>
			<Header />
			<Navbar />
			{/* <Dialogs /> */}
			<Profile />
			<Footer />
		</div>
	);
}
//? Странно, но почему-то компоненту в camelCase не хочет вызывать как тег

export default App;
