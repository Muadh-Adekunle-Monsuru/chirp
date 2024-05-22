import { configureStore } from '@reduxjs/toolkit';
import DataReducer from './data';

export const store = configureStore({
	reducer: {
		posts: DataReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
