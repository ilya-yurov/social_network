import {profileAPI} from "../../../api/api"

//Posts consts
const ADD_POST = 'profile/ADD_POST'
const DELETE_POST = 'profile/DELETE_POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_USER_STATUS = 'profile/SET_USER_STATUS'

let initialState =
{
	posts: [
		{message: "Hello, that's my first try of props usage!", id: 1, likes: "10"},
		{message: "I wanna have 99 likes at this post!", id: 2, likes: "99"},
		{message: "OMG he did it!!!", id: 3, likes: "999"},
		{message: "Default post text", id: 4, likes: "0"}
	],
	profile: null,
	status: ""
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			{
				return {
					...state,
					posts: [...state.posts, {message: action.text, id: 4, likes: 0}]
				}
			}
		case DELETE_POST:
			{
				return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
			}
		case SET_USER_PROFILE:
			{
				return {...state, profile: action.profile}
			}
		case SET_USER_STATUS:
			{
				return {...state, status: action.status}
			}
		default:
			return state
	}
}

export let addPost = (text) => ({type: ADD_POST, text})
export let deletePost = (postId) => ({type: DELETE_POST, postId})
export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export let setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const setProfile = (userId) => async (dispatch) => {
	let response = await profileAPI.getUserProfile(userId)
	dispatch(setUserProfile(response))
}

export const getStatus = (userId) => async (dispatch) => {
	let response = await profileAPI.getUserStatus(userId)
	dispatch(setUserStatus(response))
}

export const updateStatus = (userStatus) => async (dispatch) => {
	let response = await profileAPI.updateUserStatus(userStatus)
	if (response.resultCode === 0)
		dispatch(setUserStatus(userStatus))
}

export default profileReducer
