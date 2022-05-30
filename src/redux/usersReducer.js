//Users consts
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = 
{
	users: [
/* 		{id: 1, photoUrl: 'https://avatars.mds.yandex.net/i?id=2a00000179ef5a781b2accb792b8bad93114-4458806-images-thumbs&n=13&exp=1', follow: true, userName: 'Dmytry K.', status: 'I am looking for a job right now...', location: {country: 'Belarus', city: 'Minsk'}},
		{id: 2, photoUrl: 'https://avatars.mds.yandex.net/i?id=171fec5523b8cbaa01b0e60420f4f947-5709069-images-thumbs&n=13&exp=1', follow: true, userName: 'Svetlana D.', status: 'I am so pretty', location: {country: 'Belarus', city: 'Minsk'}},
		{id: 3, photoUrl: 'https://avatars.mds.yandex.net/i?id=7744379113010a746e87dd93d72258d1-5884402-images-thumbs&n=13&exp=1', follow: false, userName: 'Sergei S.', status: 'I like football!!!', location: {country: 'Ukraine', city: 'Kiev'}},
		{id: 4, photoUrl: 'https://avatars.mds.yandex.net/i?id=c1010d91575b3187745e6d73618d88d2-5869282-images-thumbs&n=13&exp=1', follow: false, userName: 'Andrew T.', status: 'I am free to help you to kreate good Video Production', location: {country: 'United States', city: 'Philadelphia'}} */
	]
};

const usersReducer = (state = initialState, action) => 
{
	switch (action.type)
	{
		case FOLLOW:
		{
			debugger;
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return {...u, follow: true};
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
						return {...u, follow: false};
					}
					return u;
				})
			}
		}
		case SET_USERS:
		{
			return {...state, users: [...action.users]};
		}
		default:
			return state;
	}
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;
