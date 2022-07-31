import { connect } from 'react-redux';
import './App.scss';
import Footer from './components/Footer/Footer';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import React, {useEffect} from 'react';
import { initializeApp } from './redux/reducers/app-reducer/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import AppRouter from './components/AppRouter/AppRouter';

const App = (props) => {

	useEffect(() => {
		props.initializeApp();
	}, []);

	if (!props.initialized) {
		return <Preloader />
	}
	return (
		<div className='app-wrapper'>
			<HeaderContainer />
			{/* <Navbar /> */}
			<div className='app-wrapper__content'>
				<AppRouter />
			</div>
			<Footer />
		</div>
	);
}

const mapStateToProps = (state) => {
	return ({
		initialized: state.app.initialized
	})
}

export default connect(mapStateToProps, { initializeApp })(App);
