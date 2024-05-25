import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import axios from 'axios';

export default function UpdatePost() {
	const queryClient = useQueryClient();
	const store = useSelector((state: RootState) => state.posts);
	return useMutation({
		mutationFn: async (id: string) => {
			const post: any = store.find((post) => post.id == id);
			try {
				console.log('called');
				const response = await axios.put(
					`http://localhost:8080/posts/${post._id}`,
					post
				);
				return response.data;
			} catch (error) {
				console.log('error updating data' + error);
				throw error;
			}
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['posts'] });
		},
	});
}
