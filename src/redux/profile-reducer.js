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
	newPostText: '',
	profile: null,
	status: ""
}

const profileReducer = (state = initialState, action) => 
{
	switch (action.type)
	{
		case ADD_POST:
			{
				{
					let stateCopy = {...state};
					stateCopy.posts = [...state.posts];
					stateCopy.posts.push({message: stateCopy.newPostText, id: 4, likes: 0});
					stateCopy.newPostText = '';
					return stateCopy;
				}
			}
		case UPDATE_NEW_POST_TEXT:
			{
				let stateCopy = {...state};
				stateCopy.newPostText = action.newText;
				return stateCopy;
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

export let addPost = () => ({type: ADD_POST});
export let updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
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
