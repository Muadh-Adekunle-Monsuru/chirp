type Vote = {
	votes: number;
};
export default function Counter({ votes }: Vote) {
	return (
		<div className='bg-purple-100/30 text-purple-900 p-2 flex gap-1 items-center justify-between lg:flex-col rounded-lg max-w-24'>
			<div className='cursor-pointer'>
				<i className='fa fa-up-long text-purple-200'></i>
			</div>
			<div className='font-semibold'>{votes}</div>
			<div className='cursor-pointer'>
				<i className='fa fa-down-long text-purple-200'></i>
			</div>
		</div>
	);
}
