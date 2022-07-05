import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Footer from './components/Footer/Footer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import React from 'react';
import { initializeApp } from './redux/reducers/app-reducer/app-reducer';
import Preloader from './components/common/Preloader/Preloader';


class App extends React.Component {

	componentDidMount() {
		this.props.initializeApp();
	}
	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}
		return (
			<div className='app-wrapper'>
				<HeaderContainer />
				<Navbar state={this.props.state.sidebar} />
				<div className='app-wrapper__content'>
					<Routes>
						<Route path='/profile/:userId' element={<ProfileContainer />} />
						<Route path='/profile' element={<ProfileContainer />} />
						<Route path='/dialogs/*' element={<DialogsContainer />} />
						<Route path='/users/*' element={<UsersContainer />} />
						<Route path='/login' element={<LoginContainer />} />
					</Routes>
				</div>
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return ({
		initialized: state.app.initialized
	})
}

export default connect(mapStateToProps, { initializeApp })(App);
