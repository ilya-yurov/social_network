import {usersAPI} from "../../../api/api";
import {updateObjectInArray} from "../../../utils/helpers";

//Consts
const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_FILTER = 'users/SET_FILTER';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState =
{
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	filter: {
		term: '',
		status: 'null'
	},
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			{
				return {
					...state,
					users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
				}
			}
		case UNFOLLOW:
			{
				return {
					...state,
					users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
				}
			}
		case SET_CURRENT_PAGE:
			{
				return {
					...state,
					currentPage: action.page
				}
			}
		case SET_USERS:
			{
				return {...state, users: [...action.users]};
			}
		case SET_FILTER:
			{
				return {...state, filter: action.payload};
			}
		case SET_TOTAL_USERS_COUNT:
			{
				return {...state, totalUsersCount: action.count};
			}
		case TOGGLE_IS_FETCHING:
			{
				return {...state, isFetching: action.isFetching};
			}
		case TOGGLE_IS_FOLLOWING_PROGRESS:
			{
				return {
					...state,
					users: updateObjectInArray(state.users, action.userId, "id", {isFollowing: action.bool})
				}
			}

		default:
			return state;
	}
}

//Action Creators

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setFilter = ({term, status}) => ({type: SET_FILTER, payload: {term, status}});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowingProgress = (bool, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, bool, userId});

//Thunk ActionCreators

export const getUsers = (currentPage, pageSize, filter) => async (dispatch) => {
	dispatch(toggleIsFetching(true))
	dispatch(setCurrentPage(currentPage))
	dispatch(setFilter(filter))

	let response = await usersAPI.getUsers(currentPage, pageSize, filter);
	dispatch(toggleIsFetching(false));
	dispatch(setUsers(response.items));
	dispatch(setTotalUsersCount(response.totalCount));
}

export const followUser = (userId) => async (dispatch) => {
	dispatch(toggleIsFollowingProgress(true, userId));
	let response = await usersAPI.followUser(userId)
	if (response.resultCode === 0) {
		dispatch(follow(userId));
	} else {
		console.error(response.messages);
	}
	dispatch(toggleIsFollowingProgress(false, userId));
}

export const unfollowUser = (userId) => async (dispatch) => {
	dispatch(toggleIsFollowingProgress(true, userId));
	const response = await usersAPI.unfollowUser(userId);
	if (response.resultCode === 0) {
		dispatch(unfollow(userId));
	} else {
		console.error(response.messages);
	}
	dispatch(toggleIsFollowingProgress(false, userId));
}

export default usersReducer;
