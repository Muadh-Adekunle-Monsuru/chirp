import { configureStore } from '@reduxjs/toolkit';
import DataReducer from './data';
import ContentReducer from './newcontent';
import ReplyReducer from './newreply';

export const store = configureStore({
	reducer: {
		posts: DataReducer,
		newPost: ContentReducer,
		reply: ReplyReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
