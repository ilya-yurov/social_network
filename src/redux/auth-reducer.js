//Auth consts
const SET_USER_DATA = 'SET_USER_DATA'
const SET_USER_PHOTO = 'SET_USER_PHOTO'


let initialState = 
{
	resultCode: 0,
	messages: [],
	id: null,
	email: null,
	login: null,
	isAuth: false,
	photos: {small: null, large: null}
};

const authReducer = (state = initialState, action) => 
{
	switch (action.type)
	{
		case SET_USER_DATA:
		{
			return {...state, ...action.data, isAuth: true};
		}
		case SET_USER_PHOTO:
		{
			return {...state, ...action.photos};
		}
		default:
			return state;
	}
}

export const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}});
export const setUserPhoto = (small, large) => ({type: SET_USER_PHOTO, photos: {photos:{small, large}}});

export default authReducer;
