import Counter from './Counter';
import CreateReply from './CreateReply';
import ReplyCard from './ReplyCard';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import DeletePost from '../query/DeletePost';
import { formatDistanceToNow } from 'date-fns';
export default function PostCard(props: any) {
	const [showReplyInput, SetShowReplyInput] = useState(false);
	const { poster, createdAt, content, id, replies, _id } = props.data;
	const [timeAgo, setTimeAgo] = useState(
		formatDistanceToNow(new Date(createdAt), { addSuffix: true })
	);
	const deletePost = DeletePost();
	const currentUser = useSelector(
		(state: RootState) => state.newPost.poster.username
	);

	return (
		<div className='w-full'>
			<div
				className='bg-slate-50 p-5 flex flex-col lg:flex-row my-2 rounded-lg  md:w-[60%] gap-4 relative w-full mx-auto'
				key={id}
			>
				<div className='order-2 lg:order-1'>
					<Counter id={id} />
				</div>
				<div className='order-1 lg:order-2 flex flex-col gap-3'>
					<div className='flex justify-between items-center'>
						<div className='flex gap-2 items-center'>
							<div className='flex gap-2 items-center'>
								<div className='w-7 h-7 rounded-full overflow-hidden '>
									<img src={poster.profile} className='w-7 h-7' alt='avatar' />
								</div>
								<span className='font-semibold text-sm'>
									{poster.username}{' '}
									{currentUser == poster.username ? '(you)' : ''}
								</span>
							</div>
							<div className='text-xs text-gray-400'>{timeAgo}</div>
						</div>
					</div>
					<p className='font-light flex-grow'>{content}</p>
				</div>
				<div className='absolute bottom-5 right-10 md:top-7 font-semibold text-xs text-purple-900 flex gap-3 cursor-pointer '>
					{poster.username == currentUser ? (
						<div
							className='text-red-900'
							onClick={() => deletePost.mutate(_id)}
						>
							<i className='fa fa-trash-can'></i>
						</div>
					) : (
						''
					)}

					<div
						className='flex content-center gap-1'
						onClick={() => SetShowReplyInput((val) => !val)}
					>
						<i className='fa fa-reply '></i>
						<p>Reply</p>
					</div>
				</div>
			</div>
			<div className='flex flex-col justify-center items-center'>
				{replies.map((val: any) => (
					<ReplyCard
						data={val}
						key={val.id}
						parentId={id}
						replyingTo={poster.username}
					/>
				))}
				{showReplyInput && (
					<CreateReply replyingTo={poster.username} postId={id} />
				)}
			</div>
		</div>
	);
}
