import './App.scss';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';


const App = () => {			//тег <App/>
	return (
		<div className='app-wrapper'>
			<Header />
			<Navbar />
			<Profile />
		</div>
	);
}
//? Странно, но почему-то компоненту в camelCase не хочет вызывать как тег

export default App;
