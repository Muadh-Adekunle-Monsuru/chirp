import Counter from './Counter';

export default function PostCard() {
	return (
		<div className='bg-slate-50 p-5 flex flex-col lg:flex-row my-2 rounded-lg shadow-sm md:w-[60%] gap-4 relative'>
			<div className='order-2 lg:order-1'>
				<Counter />
			</div>
			<div className='order-1 lg:order-2 flex flex-col gap-3'>
				<div className='flex justify-between items-center'>
					<div className='flex gap-2 items-center'>
						<div className='flex gap-2 items-center'>
							<div className='w-7 h-7 rounded-full bg-gray-400'></div>
							<span className='font-semibold text-sm'>profile</span>
						</div>
						<div className='text-xs text-gray-400'>1 month ago</div>
					</div>
				</div>
				<p className='font-light'>
					"Impressive! Though it seems the drag feature could be improved. But
					overall it looks incredible. You've nailed the design and the
					responsiveness at various breakpoints works really well.",
				</p>
			</div>
			<div className='absolute bottom-5 right-10 md:top-7 font-semibold text-xs text-purple-900 flex gap-1 cursor-pointer'>
				<div className='flex content-center gap-1'>
					<i className='fa fa-reply '></i>
					<p>Reply</p>
				</div>
			</div>
		</div>
	);
}
