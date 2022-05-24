//Реализация контейнерной компоненты. Задача - забрать на себя взаимодействие с store и отрисовать MyPosts

import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profileReducer';
import { StoreContext } from '../../../../StoreContext';
import Input from './Input';

const InputContainer = (props) => {

	return (
		<StoreContext.Consumer>
			{
				(store) =>
				{
				let addNewPost = (text) => {
					store.dispatch(addPostActionCreator(text));
				}
				let updateNewPostText = (text) => {
					debugger;
					store.dispatch(updateNewPostTextActionCreator(text));
				}
				return	<Input newPostText={store.getState().profilePage.newPostText} onAddNewPost={addNewPost} onUpdateNewPostText={updateNewPostText} />
				}
			}
		</StoreContext.Consumer>
	);
}

export default InputContainer;