export default function CreatePost() {
	return (
		<div className='bg-slate-100 p-5 flex flex-col lg:flex-row rounded-lg shadow-sm gap-4 sticky bottom-0 md:w-[60%] w-full min-h-32 justify-between border border-t '>
			<div className='flex gap-2 flex-grow items-center lg:items-start'>
				<div className='w-8 h-8 bg-gray-300 rounded-full'></div>
				<input
					className='border flex-grow p-2 rounded-lg h-full'
					type='text'
					placeholder='What is on your mind'
				/>
			</div>
			<button className='bg-purple-800 text-white px-2 text-sm font-semibold py-1 h-10 rounded-lg'>
				<span className='px-2'>Post</span>
				<li className='fa fa-paper-plane'></li>
			</button>
		</div>
	);
}
