import { useDispatch, useSelector } from 'react-redux';
import { upVote, downVote } from '../redux/data';
import { RootState } from '../redux/store';
import UpdatePost from '../query/UpdatePost';
type Vote = {
	id: string;
};
export default function Counter({ id }: Vote) {
	const updatePost = UpdatePost();
	const dispatch = useDispatch();
	const store: any = useSelector((state: RootState) =>
		state.posts.find((post) => post.id == id)
	);
	const user = useSelector((state: RootState) => state.newPost.poster.username);
	const handleUPClick = () => {
		dispatch(upVote({ id, user }));
		updatePost.mutate(id);
	};

	const handleDownClick = () => {
		dispatch(downVote({ id, user }));
		updatePost.mutate(id);
	};
	return (
		<div className='bg-purple-100/30 text-purple-900 p-2 flex gap-1 items-center justify-between lg:flex-col rounded-lg max-w-24'>
			<div className='cursor-pointer' onClick={() => handleUPClick()}>
				<i className='fa fa-up-long text-purple-200'></i>
			</div>
			<div className='font-semibold'>{store?.votes.length}</div>
			<div className='cursor-pointer' onClick={() => handleDownClick()}>
				<i className='fa fa-down-long text-purple-200'></i>
			</div>
		</div>
	);
}
