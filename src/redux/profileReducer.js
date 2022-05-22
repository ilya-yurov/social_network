//Posts consts
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = 
{
	posts: [
		{message: "Hello, that's my first try of props usage!", id: 1, likes: "10"},
		{message: "I wanna have 99 likes at store post!", id: 2, likes: "99"},
		{message: "OMG he did it!!!", id: 3, likes: "999"}
	],
	newPostText: '',
}

const profileReducer = (state = initialState, action) => 
{
	switch (action.type)
	{
		case ADD_POST:
			{
				state.posts.push({message: action.newPost, id: 4, likes: 0});
				return state;
			} 
		case UPDATE_NEW_POST_TEXT:
			{
				state.newPostText = action.newText;
				return state;
			}
		default:
			return state;
	}
}

export let addPostActionCreator = (text) => ({type: ADD_POST, newPost: text});
export let updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;
