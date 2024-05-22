import { createSlice } from '@reduxjs/toolkit';
interface Post {
	'id': string;
	'content': string;
	'createdAt': string;
	'votes': number;
	'poster': {
		'profile': string;
		'username': string;
	};
	replies: [];
}

type PostArray = Post[];

const initialState: PostArray = [
	{
		'id': '00001',
		'content':
			'Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. Youve nailed the design and the responsiveness at various breakpoints works really well.',
		'createdAt': '1 months ago',
		'votes': 15,
		'poster': {
			'profile':
				'https://api.dicebear.com/8.x/adventurer-neutral/svg?seed=Felix',
			'username': 'big_fluffy_cucumber',
		},
		replies: [],
	},
];

const dataSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		addPost: (state, action) => {
			state.push(action.payload);
		},
	},
});

export const { addPost } = dataSlice.actions;

export default dataSlice.reducer;
