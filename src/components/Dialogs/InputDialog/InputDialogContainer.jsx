//Реализация контейнерной компоненты. Задача - забрать на себя взаимодействие с store и отрисовать MyPosts

import React from 'react';
import { sendMessageActionCreator, updateDialogTextActionCreator } from '../../../redux/dialogsReducer';
import InputDialog from './InputDialog';


const InputDialogContainer = (props) => {

let sendMessage = () => {
	props.store.dispatch(sendMessageActionCreator());
};

let newMessageText = (text) => {
	props.store.dispatch(updateDialogTextActionCreator(text));
}
	return (
		<InputDialog onNewMessageText={newMessageText} onSendMessage={sendMessage} newDialogText={props.store.getState().dialogsPage.newDialogText} />
	)
}

export default InputDialogContainer;