import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppPure from './AppPure';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import { BrowserRouter} from 'react-router-dom';



ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<AppPure state={store.getState()} store={store} />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);