//Users consts
const USER_FOLLOW = 'USER-FOLLOW';

let initialState = 
{
	users: [
		{id: 1, follow: true, userName: 'Dmytry K.', status: 'I am looking for a job right now...', location: {country: 'Belarus', city: 'Minsk'}},
		{id: 2, follow: true, userName: 'Svetlana D.', status: 'I am so pretty', location: {country: 'Belarus', city: 'Minsk'}},
		{id: 3, follow: false, userName: 'Sergei S.', status: 'I like football!!!', location: {country: 'Ukraine', city: 'Kiev'}},
		{id: 4, follow: false, userName: 'Andrew T.', status: 'I am free to help you to kreate good Video Production', location: {country: 'United States', city: 'Philadelphia'}},
	],
};

const usersReducer = (state = initialState, action) => 
{
	switch (action.type)
	{
		case USER_FOLLOW:
		{
			debugger;
			const changeFollowStatus = (users, id, followState) => {
				users.forEach(elem => {
					if (elem.id == id)
						elem.follow = followState;
				});
				return users
			}
			return {
				...state,
				users: changeFollowStatus([...state.users], action.userId, action.newFollowState)
			}
		}
		default:
			return state;
	}
}

export let followChangeActionCreator = (followState, id) => {
	debugger;
	return {type: USER_FOLLOW, newFollowState: followState, userId: id}
};

export default usersReducer;
