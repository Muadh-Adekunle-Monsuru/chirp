import CreatePost from './components/CreatePost';
import PostCard from './components/PostCard';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
function App() {
	const store = useSelector((state: RootState) => state.posts);
	return (
		<div className='font-rubik bg-blueBg min-h-screen w-full lg:p-10 p-5 flex flex-col items-center'>
			{store.map((post) => (
				<PostCard data={post} />
			))}

			<CreatePost />
		</div>
	);
}

export default App;
