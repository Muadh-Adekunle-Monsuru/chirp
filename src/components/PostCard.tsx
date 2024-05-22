import Counter from './Counter';

export default function PostCard(props: any) {
	const { votes, poster, createdAt, content, id } = props.data;
	return (
		<div
			className='bg-slate-50 p-5 flex flex-col lg:flex-row my-2 rounded-lg shadow-sm md:w-[60%] gap-4 relative'
			key={id}
		>
			<div className='order-2 lg:order-1'>
				<Counter votes={votes} />
			</div>
			<div className='order-1 lg:order-2 flex flex-col gap-3'>
				<div className='flex justify-between items-center'>
					<div className='flex gap-2 items-center'>
						<div className='flex gap-2 items-center'>
							<div className='w-7 h-7 rounded-full overflow-hidden '>
								<img src={poster.profile} className='w-7 h-7' alt='avatar' />
							</div>
							<span className='font-semibold text-sm'>{poster.username}</span>
						</div>
						<div className='text-xs text-gray-400'>{createdAt}</div>
					</div>
				</div>
				<p className='font-light'>{content}</p>
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
