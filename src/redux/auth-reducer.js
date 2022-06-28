import { stopSubmit } from "redux-form";
import { authAPI, profileAPI } from "../api/api";
import defaultUserPhoto from '../assets/images/avatar.webp'

//Auth consts
const SET_USER_DATA = 'SET_USER_DATA'
const SET_USER_PHOTO = 'SET_USER_PHOTO'
const REMOVE_USER_DATA = 'UNSET_USER_DATA'


let initialState = 
{
	resultCode: 0,
	messages: [],
	id: null,
	email: null,
	login: null,
	isAuth: false,
	photos: {small: null, large: null},
	isPhotoUpdate: false
};

const authReducer = (state = initialState, action) => 
{
	switch (action.type)
	{
		case SET_USER_DATA:
		{
			return {...state, ...action.data, isAuth: true};
		}
		case REMOVE_USER_DATA:
		{
			return {...state, ...action.data, isAuth: false};
		}
		case SET_USER_PHOTO:
		{
			return {...state, ...action.photos, isPhotoUpdate: true };
		}
		default:
			return state;
	}
}

const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}});
const removeAuthUserData = () => ({type: REMOVE_USER_DATA, data: {id:null, email:null, login:null}});
const setUserPhoto = (small, large) => ({type: SET_USER_PHOTO, photos: {photos:{small, large}}});

export const isUserAuth = () => (dispatch) => {
	authAPI.isAuth()
	.then(data => {
		if (data.resultCode === 0) {
			let {email, id, login} = data.data;
			dispatch(setAuthUserData(id, email, login));
		}
	})
}

export const getUserProfile = (userId) => (dispatch) => {
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

export const loginUser = (email, password, rememberMe) => (dispatch) => {
	authAPI.login(email, password, rememberMe)
	.then(data => {
		if (data.resultCode === 0) {
			authAPI.isAuth()
			.then(data => {
				if (data.resultCode === 0) {
					let {email, id, login} = data.data;
					dispatch(setAuthUserData(id, email, login));
				}
			})
		} else {
			let message =  data.messages.length > 0 ? data.messages[0] : 'Some error';
			dispatch(stopSubmit('login', {_error: message}));
		}
	})
}


export const logoutUser = () => (dispatch) => {
	authAPI.logout()
	.then(data => {
		if (data.resultCode === 0) {
			authAPI.isAuth()
			.then(data => {
				if (data.resultCode === 1) {
					dispatch(removeAuthUserData());
				}
			})
		}
	})
}

export default authReducer;
