import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let posts = [
	{message: "Hello, that's my first try of props usage!", id: 1, likes: "10"},
	{message: "I wanna have 99 likes at this post!", id: 2, likes: "99"},
	{message: "OMG he did it!!!", id: 3, likes: "999"}
]
let dialogs = [
	{name: 'Victor', id: 1, active: 0},
	{name: 'Nadya', id: 2, active: 0},
	{name: 'Irina', id: 3, active: 1},
	{name: 'Ilya', id: 4, active: 0},
	{name: 'John', id: 5, active: 0},
	{name: 'Petya', id: 6, active: 0},
	{name: 'Valentina', id: 7, active: 0}
]
let messages = [
	{message: 'Hi there!', id: 1, active: 0},
	{message: 'How are you?', id: 2, active: 0},
	{message: 'Wanna walk outside?', id: 3, active: 1},
	{message: 'I\'m so sad :(', id: 4, active: 0},
	{message: ':D', id: 5, active: 0},
	{message: 'Hmm... just ignore you...', id: 6, active: 0},
	{message: 'Californicaaaaaaation!!!', id: 7, active: 0}
]


ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
