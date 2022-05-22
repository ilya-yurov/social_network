let initialState = 
	[
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
];

const sidebarReducer = (state = initialState, action) => 
{
	return state;
}

export default sidebarReducer;