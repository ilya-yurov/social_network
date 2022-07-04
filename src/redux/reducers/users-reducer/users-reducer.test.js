import usersReducer, { follow, unfollow } from "./users-reducer";

let state = 
{
	users: [
		{followed: false, id: 24754, name: "person1", photos: {small: null, large: null}, status: null, uniqueUrlName: null},
		{followed: false, id: 24753, name: "person2", photos: {small: null, large: null}, status: null, uniqueUrlName: null},
		{followed: true, id: 24752, name: "person3", photos: {small: null, large: null}, status: null, uniqueUrlName: null},
		{followed: false, id: 24751, name: "person4", photos: {small: null, large: null}, status: null, uniqueUrlName: null}
	],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
};

test('successfuly follow user', () => {
	//1. Initialize test (add some source data)
	let userId = 24753;
	let action = follow(userId);
	//2. Make action
	let newState = usersReducer(state, action)
	//3. Check expectation
	let userFollowStatus = newState.users.find(p => p.id === userId).followed;
	expect(userFollowStatus).toBe(true);
});
test('successfuly unfollow user', () => {
	//1. Initialize test (add some source data)
	let userId = 24752;
	let action = unfollow(userId);
	//2. Make action
	let newState = usersReducer(state, action)
	//3. Check expectation
	let userFollowStatus = newState.users.find(p => p.id === userId).followed;
	expect(userFollowStatus).toBe(false);
});