import CreatePost from './components/CreatePost';
import PostCard from './components/PostCard';
import { useSelector, useDispatch } from 'react-redux';
import { addPost } from './redux/data';
import { RootState } from './redux/store';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
function App() {
	const store = useSelector((state: RootState) => state.posts);
	const dispatch = useDispatch();
	const { isPending, isError } = useQuery({
		queryKey: ['posts'],
		queryFn: () => {
			return axios
				.get('https://smallposts-backend.vercel.app/posts')
				.then((response) => {
					console.log('data refected');
					dispatch(addPost(response.data));
					return response.data;
				})
				.catch((e) => {
					console.log('error fetching data', e);
					throw e;
				});
		},
	});

	if (isPending) {
		console.log('fetching data');
		return (
			<AnimatePresence>
				<motion.div
					key={'loading page'}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className='bg-blueBg min-h-screen w-full flex flex-col gap-10 items-center justify-center'
				>
					<h1 className='font-sans font-bold text-2xl'>Loading Posts...</h1>
					<div className='w-10 h-10 bg-purple-400 rounded-full animate-pulse'></div>
				</motion.div>
			</AnimatePresence>
		);
	}
	if (isError) {
		console.log('Error fetchind data');
		return (
			<AnimatePresence>
				<motion.div
					key={'loading page'}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className='bg-blueBg min-h-screen w-full flex flex-col gap-10 items-center justify-center'
				>
					<h1 className='font-sans font-bold text-2xl'>
						Opps, Connection Eror...
					</h1>
					<p>Retrying </p>
					<div className='w-10 h-10 bg-red-500 rounded-full animate-pulse'></div>
				</motion.div>
			</AnimatePresence>
		);
	}

	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				layout
				key={'data loaded'}
				className='font-rubik bg-blueBg min-h-screen w-full lg:p-10 p-5 flex flex-col items-center'
			>
				{store.map((post) => (
					<PostCard data={post} key={post.id} />
				))}

				<CreatePost />
			</motion.div>
		</AnimatePresence>
	);
}

export default App;
