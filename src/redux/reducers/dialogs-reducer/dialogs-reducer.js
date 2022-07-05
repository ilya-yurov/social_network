//Dialogs consts
const SEND_MESSAGE = 'dialogs/SEND-MESSAGE';

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
		messages: [],
};

const dialogsReducer = (state = initialState, action) => 
{
	switch (action.type)
	{
		case SEND_MESSAGE:
		{
			return {
				...state,
				messages: [...state.messages, {message: action.message, id: 8, likes: 0}],
			}
		}
		default:
			return state;
	}
}

export let sendMessage = (message) => ({type: SEND_MESSAGE, message});

export default dialogsReducer;