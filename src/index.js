import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, { addPost, updateDialogText, updateNewPostText } from './redux/state';

export let rerenderEntireTree = (state) => {
	ReactDOM.render(
	<React.StrictMode>
		<App state={state} addPost={addPost} updateNewPostText={updateNewPostText} updateDialogText={updateDialogText}/>
	</React.StrictMode>,
	document.getElementById('root')
	);
};
rerenderEntireTree(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
