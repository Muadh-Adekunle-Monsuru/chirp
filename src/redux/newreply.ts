import { createSlice } from '@reduxjs/toolkit';
interface Post {
	'id': string;
	'content': string;
	'createdAt': string;
	'votes': string[];
	'replyingTo': string;
	'poster': {
		'profile': string;
		'username': string;
	};
	replies: [];
	ReplyInputShown: boolean;
}

const initialState: Post = {
	'id': '',
	'content': '',
	'createdAt': '',
	'votes': [],
	'replyingTo': '',
	'poster': {
		'profile': '',
		'username': '',
	},
	ReplyInputShown: false,
	replies: [],
};
const dataSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		setReplyId: (state) => {
			const date = new Date();
			state.id = date.getTime().toString();
		},
		updateReplyContent: (state, action) => {
			state.content = action.payload;
		},
		setReplyCreatedAt: (state, action) => {
			state.createdAt = action.payload;
		},
		setReplyProfile: (state, action) => {
			state.poster.profile = action.payload;
		},
		setReplyUsername: (state, action) => {
			state.poster.username = action.payload;
		},
		setReplyingTo: (state, action) => {
			state.replyingTo = action.payload;
		},
	},
});

export const {
	updateReplyContent,
	setReplyCreatedAt,
	setReplyProfile,
	setReplyUsername,
	setReplyId,
	setReplyingTo,
} = dataSlice.actions;

export default dataSlice.reducer;
