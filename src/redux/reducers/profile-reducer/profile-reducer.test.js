import profileReducer, {addPost, deletePost} from "./profile-reducer"

let state =
{
	posts: [
		{message: "Hello, that's my first try of props usage!", id: 1, likes: "10"},
		{message: "I wanna have 99 likes at this post!", id: 2, likes: "99"},
		{message: "OMG he did it!!!", id: 3, likes: "999"}
	]
}
test('length of posts should be incremented', () => {
	//1. Initialize test (add some source data)
	let action = addPost('some text')
	//2. Make action
	let newState = profileReducer(state, action)
	//3. Check expectation
	expect(newState.posts.length).toBe(4)
})
test('message of new post shold be correct', () => {
	//1. Initialize test (add some source data)
	let action = addPost('some text')
	//2. Make action
	let newState = profileReducer(state, action)
	//3. Check expectation
	expect(newState.posts[3].message).toBe('some text')
})
test('after deleting lengts of messages should be decrement', () => {
	//1. Initialize test (add some source data)
	let action = deletePost(1)
	//2. Make action
	let newState = profileReducer(state, action)
	//3. Check expectation
	expect(newState.posts.length).toBe(2)
})


