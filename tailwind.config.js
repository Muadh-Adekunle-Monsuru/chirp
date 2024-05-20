/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				'rubik': ['Rubik', 'sans'],
			},
			backgroundColor: {
				'blueBg': 'hsl(239, 57%, 96%)',
			},
		},
	},
	plugins: [],
};
