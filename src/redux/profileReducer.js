//Posts consts
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => 
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
