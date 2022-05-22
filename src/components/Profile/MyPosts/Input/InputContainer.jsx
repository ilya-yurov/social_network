//Реализация контейнерной компоненты. Задача - забрать на себя взаимодействие с store и отрисовать MyPosts

import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profileReducer';
import Input from './Input';

const InputContainer = (props) => {
	let addNewPost = (text) => {
		props.store.dispatch(addPostActionCreator(text));
	}
	let updateNewPostText = (text) => {
		debugger;
		props.store.dispatch(updateNewPostTextActionCreator(text));
	}
	return (
		<Input newPostText={props.store.getState().profilePage.newPostText} onAddNewPost={addNewPost} onUpdateNewPostText={updateNewPostText}/>
	);
}

export default InputContainer;