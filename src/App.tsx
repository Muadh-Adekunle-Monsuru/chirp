import CreatePost from './components/CreatePost';
import PostCard from './components/PostCard';
import { useSelector, useDispatch } from 'react-redux';
import { addPost } from './redux/data';
import { RootState } from './redux/store';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
function App() {
	const store = useSelector((state: RootState) => state.posts);
	const dispatch = useDispatch();
	const { isPending, isError, data } = useQuery({
		queryKey: ['posts'],
		queryFn: () => {
			return axios
				.get('http://localhost:8080/posts')
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
		return <h1>fetching data</h1>;
	}
	if (isError) {
		console.log('Error fetchind data');
		return <h1>error fetching data</h1>;
	}
	if (Boolean(data)) {
		console.log(data);
	}
	return (
		<div className='font-rubik bg-blueBg min-h-screen w-full lg:p-10 p-5 flex flex-col items-center'>
			{store.map((post) => (
				<PostCard data={post} key={post.id} />
			))}

			<CreatePost />
		</div>
	);
}

export default App;
