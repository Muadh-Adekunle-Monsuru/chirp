import { createSlice } from '@reduxjs/toolkit';

interface Post {
	'poster': {
		'username': string;
		'profile': string;
	};
	'id': string;
	'date': string;
}
