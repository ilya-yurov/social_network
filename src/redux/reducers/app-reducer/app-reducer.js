import { isUserAuth } from "../auth-reducer/auth-reducer";

//Auth consts
const INITIALIZE_SUCCESS = 'app/INITIALIZE_SUCCESS'


let initialState = 
{
	initialized: false
};

const appReducer = (state = initialState, action) => {
	switch (action.type)
	{
		case INITIALIZE_SUCCESS:
		{
			return {...state,
				initialized: true
			};
		}
		default:
			return state;
	}
}

const initializeSuccess = () => ({type: INITIALIZE_SUCCESS});


export const initializeApp = () => (dispatch) => {
	let promise = dispatch(isUserAuth());
	Promise.all([promise])
	.then(() => {
		dispatch(initializeSuccess());
	})
	//If its more, then one promises you must use Promise.all method to run the array of promises.
	//for example: Promise.all([promise1, ... , promiseN]).then(() => dispatch(initializeSuccess)) <- Common callback after execution of all promises
	//the process of launching promises occurs in parallel
}

export default appReducer;
