export let store = {
	_state: {
		profilePage: {
			posts: [
				{message: "Hello, that's my first try of props usage!", id: 1, likes: "10"},
				{message: "I wanna have 99 likes at store post!", id: 2, likes: "99"},
				{message: "OMG he did it!!!", id: 3, likes: "999"}
			],
			newPostText: '',
			newDialogText: '',
		},
		dialogs: [
			{name: 'Victor', id: 1, active: 0},
			{name: 'Nadya', id: 2, active: 0},
			{name: 'Irina', id: 3, active: 1},
			{name: 'Ilya', id: 4, active: 0},
			{name: 'John', id: 5, active: 0},
			{name: 'Petya', id: 6, active: 0},
			{name: 'Valentina', id: 7, active: 0}
		],
		messages: [
			{message: 'Hi there!', id: 1, active: 0},
			{message: 'How are you?', id: 2, active: 0},
			{message: 'Wanna walk outside?', id: 3, active: 1},
			{message: 'I\'m so sad :(', id: 4, active: 0},
			{message: ':D', id: 5, active: 0},
			{message: 'Hmm... just ignore you...', id: 6, active: 0},
			{message: 'Californicaaaaaaation!!!', id: 7, active: 0}
		],
		sidebar: [
			{name: 'Sarah', id: 1},
			{name: 'Max', id: 2},
			{name: 'Helen', id: 3},
			{name: 'Jack', id: 4},
			{name: 'Sam', id: 4},
			{name: 'Kenny', id: 4},
			{name: 'Petya', id: 4},
			{name: 'Sasha', id: 4},
			{name: 'Sam', id: 4},
			{name: 'Kenny', id: 4},
			{name: 'Petya', id: 4},
			{name: 'Sasha', id: 4},
		]
	},
	rerenderEntireTree() {
		console.log('State changed');
	},
	rerender(observer) {
		this.rerenderEntireTree = observer;
	},
	addPost(newPost) {
		this._state.profilePage.posts.push({message: newPost, id: 4, likes: 0});
		this.rerenderEntireTree(this.getState());
	},
	updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText;
		this.rerenderEntireTree(this.getState());
	},
	updateDialogText(newText) {
		this._state.profilePage.newDialogText = newText;
		this.rerenderEntireTree(this.getState());
	},
	getState() {
		return this._state;
	}
};	