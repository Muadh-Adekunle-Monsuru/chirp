import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useEffect } from 'react';
import {
	updateContent,
	setCreatedAt,
	setProfile,
	setUsername,
	setId,
} from '../redux/newcontent';
import {
	uniqueNamesGenerator,
	Config,
	colors,
	adjectives,
} from 'unique-names-generator';
import { generateProfile } from '../utils';
import CreateNewPost from '../query/NewPost';
export default function CreatePost() {
	const { mutate: sendData } = CreateNewPost();
	const post = useSelector((state: RootState) => state.newPost);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setProfile(generateProfile()));
		const generateUsername = () => {
			const customConfig: Config = {
				dictionaries: [adjectives, colors],
				separator: '-',
				length: 2,
			};
			const randomName: string = uniqueNamesGenerator(customConfig);

			return randomName;
		};

		dispatch(setUsername(generateUsername()));
	}, []);

	const handlePost = () => {
		const date = new Date();
		dispatch(setCreatedAt(date.toISOString()));
		dispatch(setId());
		sendData();
	};
	return (
		<div className='bg-slate-100 p-5 flex flex-col lg:flex-row rounded-lg shadow-sm gap-4 sticky bottom-0 md:w-[60%] w-full min-h-32 justify-between border border-t lg:items-center'>
			<div className='flex gap-2 flex-grow items-center'>
				<div className='w-7 h-7 rounded-full overflow-hidden '>
					<img src={post.poster.profile} className='w-7 h-7' alt='avatar' />
				</div>
				<div className='w-full grid gap-2'>
					<span className='font-bold text-xs'>
						{post.poster.username} (you)
					</span>
					<textarea
						id='textarea'
						className='border flex-grow p-2 md:p-5 rounded-lg h-full'
						placeholder='What is on your mind'
						value={post.content}
						onChange={(e) => dispatch(updateContent(e.target.value))}
					/>
				</div>
			</div>
			<button
				className='bg-purple-800 text-white px-2 text-sm font-semibold py-1 h-10 rounded-lg'
				onClick={() => handlePost()}
			>
				<span className='px-2'>Post</span>
				<li className='fa fa-paper-plane'></li>
			</button>
		</div>
	);
}
