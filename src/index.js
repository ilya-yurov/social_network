import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './redux/redux-store'
import {Provider} from 'react-redux'
import {HashRouter} from 'react-router-dom'



ReactDOM.render(
	<React.StrictMode>
		<HashRouter>
			<Provider store={store}>
				<App state={store.getState()} store={store} />
			</Provider>
		</HashRouter>
	</React.StrictMode>,
	document.getElementById('root')
)