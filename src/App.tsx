import CreatePost from './components/CreatePost';
import PostCard from './components/PostCard';
function App() {
	return (
		<div className='font-rubik bg-blueBg min-h-screen w-full lg:p-10 p-5 flex flex-col items-center'>
			<PostCard />
			<PostCard />
			<PostCard />
			<PostCard />
			<PostCard />
			<PostCard />
			<PostCard />
			<CreatePost />
		</div>
	);
}

export default App;
