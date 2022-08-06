import {authAPI, profileAPI} from "../../../api/api"
import defaultUserPhoto from '../../../assets/images/avatar.webp'
//Auth consts
const SET_USER_DATA = 'auth/SET_USER_DATA'
const SET_USER_PHOTO = 'auth/SET_USER_PHOTO'
const REMOVE_USER_DATA = 'auth/UNSET_USER_DATA'


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
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			{
				return {...state, ...action.data, isAuth: true}
			}
		case REMOVE_USER_DATA:
			{
				return {...state, ...action.data, isAuth: false}
			}
		case SET_USER_PHOTO:
			{
				return {...state, ...action.photos, isPhotoUpdate: true}
			}
		default:
			return state
	}
}

const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}})
const removeAuthUserData = () => ({type: REMOVE_USER_DATA, data: {id: null, email: null, login: null}})
const setUserPhoto = (small, large) => ({type: SET_USER_PHOTO, photos: {photos: {small, large}}})

export const isUserAuth = () => async (dispatch) => {
	let response = await authAPI.isAuth()
	if (response.resultCode === 0) {
		let {email, id, login} = response.data
		dispatch(setAuthUserData(id, email, login))
	}
}

export const getUserProfile = (userId) => async (dispatch) => {
	if (userId) {
		let response = await profileAPI.getUserProfile(userId)
		let {small, large} = response.photos
		if (small === null)
			small = defaultUserPhoto
		if (large === null)
			large = defaultUserPhoto
		dispatch(setUserPhoto(small, large))
	}
}

export const loginUser = ({email, password, rememberMe}, setStatus, setSubmitting) => async (dispatch) => {
	let response = await authAPI.login(email, password, rememberMe)
	if (response.resultCode === 0) {
		let response = await authAPI.isAuth()
		if (response.resultCode === 0) {
			let {email, id, login} = response.data
			dispatch(setAuthUserData(id, email, login))
		}
	} else {
		let message = response.messages.length > 0 ? response.messages[0] : 'Some error'
		setStatus({error: message})
		setSubmitting(false)
	}
}

export const logoutUser = () => async (dispatch) => {
	let response = await authAPI.logout()
	if (response.resultCode === 0) {
		let response = await authAPI.isAuth()
		if (response.resultCode === 1) {
			dispatch(removeAuthUserData())
		}
	}
}

export default authReducer
