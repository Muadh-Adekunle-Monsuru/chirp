import { createSlice } from '@reduxjs/toolkit';
interface Post {
	'id': string;
	'content': string;
	'createdAt': string;
	'votes': string[];
	'poster': {
		'profile': string;
		'username': string;
	};
	replies: [];
}

const initialState: Post = {
	'id': '',
	'content': '',
	'createdAt': '',
	'votes': [],
	'poster': {
		'profile': '',
		'username': '',
	},
	replies: [],
};
const dataSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		setId: (state, action) => {
			state.id = action.payload;
		},
		updateContent: (state, action) => {
			state.content = action.payload;
		},
		setCreatedAt: (state, action) => {
			state.createdAt = action.payload;
		},
		setProfile: (state, action) => {
			state.poster.profile = action.payload;
		},
		setUsername: (state, action) => {
			state.poster.username = action.payload;
		},
	},
});

export const { updateContent, setCreatedAt, setProfile, setUsername, setId } =
	dataSlice.actions;

export default dataSlice.reducer;
