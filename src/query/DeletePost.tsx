import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
export default function DeletePost() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (_id) => {
			try {
				const response = await axios.delete(
					`https://smallposts-backend.vercel.app/posts/${_id}`
				);

				return response.data;
			} catch (error) {
				console.log('error deleting', error);
				throw error;
			}
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['posts'] });
		},
	});
}
