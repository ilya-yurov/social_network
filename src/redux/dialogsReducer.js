//Dialogs consts
const UPDATE_DIALOG_TEXT = 'UPDATE-DIALOG-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => 
{
	switch (action.type)
	{
		case UPDATE_DIALOG_TEXT:
		{
			state.newDialogText = action.newText;
			return state;
		}
		case SEND_MESSAGE:
		{
			let body = state.newDialogText;
			state.newDialogText = '';
			state.messages.push({message: body, id: 8, likes: 0});
			return state;
		}
		default:
			return state;
	}
}

export let updateDialogTextActionCreator = (text) => ({type: UPDATE_DIALOG_TEXT, newText: text});
export let sendMessageActionCreator = (text) => ({type: SEND_MESSAGE});

export default dialogsReducer;