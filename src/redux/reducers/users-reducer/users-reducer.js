import { usersAPI } from "../../../api/api";
import { updateObjectInArray } from "../../../utils/helpers";

//Consts
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState =
{
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			{
				return {
					...state,
					users: state.users.map(u => {
						if (u.id === action.userId) {
							return { ...u, followed: true };
						}
						return u;
					})
				}
			}
		case UNFOLLOW:
			{
				return {
					...state,
					users: state.users.map(u => {
						if (u.id === action.userId) {
							return { ...u, followed: false };
						}
						return u;
					})
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
				return { ...state, users: [...action.users] };
			}
		case SET_TOTAL_USERS_COUNT:
			{
				return { ...state, totalUsersCount: action.count };
			}
		case TOGGLE_IS_FETCHING:
			{
				return { ...state, isFetching: action.isFetching };
			}
		case TOGGLE_IS_FOLLOWING_PROGRESS:
			{
				return {
					...state,
					users: state.users.map(u => {
						if (u.id === action.userId) {
							return { ...u, isFollowing: action.bool };
						}
						return { ...u, isFollowing: false };
					})
				}
			}

		default:
			return state;
	}
}

//Action Creators

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page });
export const setTotalUsersCount = (count) => ({ type: SET_TOTAL_USERS_COUNT, count });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleIsFollowingProgress = (bool, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, bool, userId });

//Thunk ActionCreators

export const getUsers = (currentPage, pageSize) => (dispatch) => {
	dispatch(setCurrentPage(currentPage));
	dispatch(toggleIsFetching(true));
	usersAPI.getUsers(currentPage, pageSize)
		.then(data => {
			dispatch(toggleIsFetching(false));
			dispatch(setUsers(data.items));
			dispatch(setTotalUsersCount(data.totalCount));
		});
}
export const followUser = (userId) => (dispatch) => {
	dispatch(toggleIsFollowingProgress(true, userId));
	usersAPI.followUser(userId)
		.then(data => {
			if (data.resultCode === 0) {
				dispatch(follow(userId));
			} else {
				console.error(data.messages);
			}
			dispatch(toggleIsFollowingProgress(false, userId));
		})
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
