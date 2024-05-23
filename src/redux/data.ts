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
		'id': '00001',
		'content':
			'Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. Youve nailed the design and the responsiveness at various breakpoints works really well.',
		'createdAt': '1 months ago',
		'votes': ['lonley-wold'],
		'poster': {
			'profile':
				'https://api.dicebear.com/8.x/adventurer-neutral/svg?seed=Felix',
			'username': 'fluffy-llama',
		},
		replies: [
			{
				'id': '3',
				'content':
					"If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
				'createdAt': '1 week ago',
				'votes': [''],
				'replyingTo': 'maxblagun',
				'poster': {
					'profile':
						'https://api.dicebear.com/8.x/adventurer-neutral/svg?seed=justine',
					'username': 'cute-cupcakes',
				},
			},
			{
				'id': '4',
				'content':
					"I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
				'createdAt': '2 days ago',
				'votes': [''],
				'replyingTo': 'ramsesmiron',
				'poster': {
					'profile':
						'https://api.dicebear.com/8.x/adventurer-neutral/svg?seed=ice',
					'username': 'lovely-lavender',
				},
			},
		],
	},
];

const dataSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		addPost: (state, action) => {
			state.unshift(action.payload);
		},
		upVote: (state, action) => {
			state.map((post) => {
				if (post.id == action.payload) {
					if (!post.votes.includes(action.payload)) {
						post.votes.push(action.payload);
					}
				}
			});
		},
		downVote: (state, action) => {
			state.map((post) => {
				if (post.id == action.payload) {
					if (post.votes.includes(action.payload)) {
						post.votes = post.votes.filter((voter) => voter !== action.payload);
					}
				}
			});
		},
	},
});

export const { addPost, upVote, downVote } = dataSlice.actions;

export default dataSlice.reducer;
