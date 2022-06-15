import { authAPI, profileAPI } from "../api/api";
import defaultUserPhoto from '../assets/images/avatar.webp'

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
			debugger;
			return {...state, ...action.data, isAuth: true};
		}
		case SET_USER_PHOTO:
		{
			debugger;
			return {...state, ...action.photos};
		}
		default:
			return state;
	}
}

const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}});
const setUserPhoto = (small, large) => ({type: SET_USER_PHOTO, photos: {photos:{small, large}}});

export const isUserAuth = () => (dispatch) => {
	authAPI.isAuth()
	.then(data => {
		if (data.resultCode === 0) {
			debugger;
			let {email, id, login} = data.data;
			console.log(email, login, id);
			dispatch(setAuthUserData(id, email, login));
		}
	})
}

export const getUserProfile = (userId) => (dispatch) => {
	debugger;
	if (userId) {
		profileAPI.getUserProfile(userId)
		.then(data => {
				let {small, large} = data.photos;
				if (small === null)
					small = defaultUserPhoto;
				if (large === null)
					large = defaultUserPhoto;
				dispatch(setUserPhoto(small, large));
		})
	}
}
export default authReducer;
