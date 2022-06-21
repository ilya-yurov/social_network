import { profileAPI } from "../api/api";

//Posts consts
const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'

let initialState = 
{
	posts: [
		{message: "Hello, that's my first try of props usage!", id: 1, likes: "10"},
		{message: "I wanna have 99 likes at this post!", id: 2, likes: "99"},
		{message: "OMG he did it!!!", id: 3, likes: "999"}
	],
/* 	newPostText: '', */
	profile: null,
	status: ""
}

const profileReducer = (state = initialState, action) => 
{
	switch (action.type)
	{
		case ADD_POST:
			{
				return {
					...state, 
					posts: [...state.posts, {message: action.text, id: 4, likes: 0}]
				}
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
			return state;
	}
}

export let addPost = (text) => ({type: ADD_POST, text});
export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export let setUserStatus = (status) => ({type: SET_USER_STATUS, status});

export const setProfile = (userId) => (dispatch) => {
	profileAPI.getUserProfile(userId)
	.then(data => {
		dispatch(setUserProfile(data));
	})
}
export const getStatus = (userId) => (dispatch) => {
	profileAPI.getUserStatus(userId)
	.then(status => {
		dispatch(setUserStatus(status));
	})
}
export const updateStatus = (userStatus) => (dispatch) => {
	profileAPI.updateUserStatus(userStatus)
	.then(data => {
		if (data.resultCode === 0)
			dispatch(setUserStatus(userStatus));
	})
}

export default profileReducer;
