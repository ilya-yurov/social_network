//Dialogs consts
const UPDATE_DIALOG_TEXT = 'UPDATE-DIALOG-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
		dialogs: [
			{name: 'Victor', id: 1, active: 0},
			{name: 'Nadya', id: 2, active: 0},
			{name: 'Irina', id: 3, active: 1},
			{name: 'Ilya', id: 4, active: 0},
			{name: 'John', id: 5, active: 0},
			{name: 'Petya', id: 6, active: 0},
			{name: 'Valentina', id: 7, active: 0}
		],
		messages: [
			{message: 'Hi there!', id: 1, active: 0},
			{message: 'How are you?', id: 2, active: 0},
			{message: 'Wanna walk outside?', id: 3, active: 1},
			{message: 'I\'m so sad :(', id: 4, active: 0},
			{message: ':D', id: 5, active: 0},
			{message: 'Hmm... just ignore you...', id: 6, active: 0},
			{message: 'Californicaaaaaaation!!!', id: 7, active: 0}
		],
		newDialogText: '',
};

const dialogsReducer = (state = initialState, action) => 
{
	switch (action.type)
	{
		case UPDATE_DIALOG_TEXT:
		return {
			...state,
			newDialogText: action.newText
	}

		case SEND_MESSAGE:
		{
			return {
				...state,
				messages: [...state.messages, {message: state.newDialogText, id: 8, likes: 0}],
				newDialogText: ''
			}
		}
		default:
			return state;
	}
}

export let updateDialogText = (text) => ({type: UPDATE_DIALOG_TEXT, newText: text});
export let sendMessage = () => ({type: SEND_MESSAGE});

export default dialogsReducer;