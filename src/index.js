import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import { Provider } from 'react-redux';


/* console.log('Request data');
const p = new Promise(function(resolve, reject) {
	setTimeout(() => {
		console.log('preparing data...');
		const backendData = {
			server: 'aws',
			port: 2000,
			status: 'working'
		}
		resolve(backendData);
	}, 2000)
})

p.then (data => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			data.modified = true;
			reject(data);
			console.log('Data recived', data);
		}, 2000)
	})
})
.then(clientData => {
	clientData.fromPromise = true;
	return clientData;
})
.then(data => {
	console.log('Modified', data);
})
.catch(err => console.error('Error: ', err))
.finally(() => console.log('Finally')); */

const sleep = ms => {
	return new Promise(resolve => {
		setTimeout(() => resolve(), ms)
	})
}
/* sleep(2000)
.then(() => console.log('After 2 sec'))
sleep(3000)
.then(() => console.log('After 3 sec')) */

Promise.all([sleep(2000), sleep(5000)])
.then(() => console.log('All promises!'))
Promise.race([sleep(2000), sleep(5000)])
.then(() => console.log('Race promises!'))


ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App state={store.getState()} store={store}/>
		</Provider>
	</React.StrictMode>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
