import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { updateContent } from '../redux/newcontent';
export default function CreateNewPost() {
	const dispatch = useDispatch();
	const store = useSelector((state: RootState) => state.newPost);
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: () => {
			return axios
				.post('https://smallposts-backend.vercel.app/posts', store)
				.then((response) => {
					console.log('data sent successfully');
					dispatch(updateContent(''));
					return response.data;
				})
				.catch((e) => {
					console.log('error sending post' + e);
					throw e;
				});
		},
		onSuccess: () => {
			console.log('✅');
			queryClient.invalidateQueries({ queryKey: ['posts'] });
		},
	});
}
