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
		{
			{
				let stateCopy = {...state};
				stateCopy.newDialogText = action.newText;
				return stateCopy;
			}
		}
		case SEND_MESSAGE:
		{
			{
				let stateCopy = {...state};

				debugger;
				stateCopy.messages = [...state.messages];
				stateCopy.messages.push({message: stateCopy.newDialogText, id: 8, likes: 0});
				stateCopy.newDialogText = '';
				return stateCopy;
			}
		}
		default:
			return state;
	}
}

export let updateDialogTextActionCreator = (text) => ({type: UPDATE_DIALOG_TEXT, newText: text});
export let sendMessageActionCreator = () => ({type: SEND_MESSAGE});

export default dialogsReducer;