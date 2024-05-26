import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { AnimatePresence, motion } from 'framer-motion';
export default function ReplyCard(props: any) {
	const { poster, createdAt, content,id } = props.data;
	const [timeAgo, _] = useState(
		formatDistanceToNow(new Date(createdAt), { addSuffix: true })
	);
	return (
		<motion.div key={id} className='bg-slate-50 p-5 flex flex-col lg:flex-row border border-t rounded-lg  gap-2 relative md:w-[55%] w-[90%] lg:-mr-14 -mr-3 my-1'>
			<div className='order-1 lg:order-2 flex flex-col gap-3'>
				<div className='flex justify-between items-center'>
					<div className='flex gap-2 items-center'>
						<div className='flex gap-2 items-center'>
							<div className='w-5 h-5 rounded-full overflow-hidden '>
								<img src={poster.profile} className='w-5 h-5' alt='avatar' />
							</div>
							<span className='font-semibold text-sm'>{poster.username}</span>
						</div>
						<div className='text-xs text-gray-400'>{timeAgo}</div>
					</div>
				</div>
				<p className='font-light'>
					<span className='font-bold'> </span>
					{content}
				</p>
			</div>
		</motion.div>
	);
}
