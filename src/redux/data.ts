import { createSlice } from '@reduxjs/toolkit';
interface Reply {
	'id': string;
	'content': string;
	'createdAt': string;
	'replyingTo': string;
	'votes': string[];
	'poster': {
		'profile': string;
		'username': string;
	};
}
interface Post {
	'_id': string;
	'id': string;
	'content': string;
	'createdAt': string;
	'votes': string[];
	'poster': {
		'profile': string;
		'username': string;
	};
	replies: Reply[];
}

type PostArray = Post[];

const initialState: PostArray = [
	{
		'_id': '',
		'id': '',
		'content': '',
		'createdAt': '',
		'votes': [],
		'poster': {
			'profile':
				'https://api.dicebear.com/8.x/adventurer-neutral/svg?seed=Felix',
			'username': '',
		},
		replies: [],
	},
];

const dataSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		addPost: (_, action) => {
			return action.payload;
		},
		upVote: (state, action) => {
			state.map((post) => {
				if (post.id == action.payload.id) {
					if (!post.votes.includes(action.payload.user)) {
						post.votes.push(action.payload.user);
					}
				}
			});
		},
		downVote: (state, action) => {
			state.map((post) => {
				if (post.id == action.payload.id) {
					if (post.votes.includes(action.payload.user)) {
						post.votes = post.votes.filter(
							(voter) => voter !== action.payload.user
						);
					}
				}
			});
		},
		replyUpVote: (state, action) => {
			state.map((post) => {
				if (post.id == action.payload.parentId) {
					post.replies.map((reply) => {
						if (reply.id == action.payload.id) {
							if (!reply.votes.includes(action.payload.username)) {
								reply.votes.push(action.payload.username);
							}
						}
					});
				}
			});
		},
		replyDownVote: (state, action) => {
			state.map((post) => {
				if (post.id == action.payload.parentId) {
					post.replies.map((reply) => {
						if (reply.id == action.payload.id) {
							if (reply.votes.includes(action.payload.username)) {
								reply.votes = reply.votes.filter(
									(user) => user !== action.payload.username
								);
							}
						}
					});
				}
			});
		},
		addReply: (state, action) => {
			state.map((post) => {
				if (post.id == action.payload.id) {
					post.replies.push(action.payload.data);
				}
			});
		},
	},
});

export const {
	addPost,
	upVote,
	downVote,
	replyUpVote,
	replyDownVote,
	addReply,
} = dataSlice.actions;

export default dataSlice.reducer;
