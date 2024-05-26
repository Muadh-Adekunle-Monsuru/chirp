import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useEffect } from 'react';
import {
	updateReplyContent,
	setReplyCreatedAt,
	setReplyProfile,
	setReplyUsername,
	setReplyId,
	setReplyingTo,
} from '../redux/newreply';
import { addReply } from '../redux/data';
import UpdatePost from '../query/UpdatePost';

interface Prop {
	replyingTo: string;
	postId: string;
}
export default function CreateReply({ replyingTo, postId }: Prop) {
	const updatePost = UpdatePost();
	const reply = useSelector((state: RootState) => state.reply);
	const post = useSelector((state: RootState) =>
		state.posts.find((post) => post.id == postId)
	);
	const currentPoster = useSelector((state: RootState) => state.newPost.poster);

	const dispatch = useDispatch();
	useEffect(() => {
		const date = new Date();
		dispatch(setReplyUsername(currentPoster.username));
		dispatch(setReplyProfile(currentPoster.profile));
		dispatch(setReplyCreatedAt(date.toISOString()));
		dispatch(setReplyingTo(post?.poster.username));
		dispatch(setReplyId());
		dispatch(updateReplyContent(''));
	}, []);

	useEffect(() => {
		dispatch(setReplyId());
	}, [reply.content]);
	const handlePost = () => {
		dispatch(addReply({ id: post?.id, data: reply }));
		updatePost.mutate(postId);
		dispatch(updateReplyContent(''));
	};
	return (
		<div className='bg-slate-100 p-5 flex flex-col lg:flex-row rounded-lg shadow-sm gap-4 sticky bottom-0 md:w-[55%] w-[90%] min-h-20 justify-between border border-t lg:items-center'>
			<div className='flex gap-2 flex-grow items-center'>
				<div className='w-full grid gap-2'>
					<span className='font-bold text-xs'>replying to {replyingTo}</span>
					<textarea
						className='border flex-grow p-1 rounded-lg h-full'
						placeholder='Reply ...'
						value={reply.content}
						onChange={(e) => dispatch(updateReplyContent(e.target.value))}
					/>
				</div>
			</div>
			<button
				className='bg-purple-800 text-white px-2 text-sm font-semibold py-1 h-10 rounded-lg'
				onClick={() => handlePost()}
			>
				<span className='px-2'>Reply</span>
				<li className='fa fa-paper-plane'></li>
			</button>
		</div>
	);
}
