/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'index.html',
		'./src/**/*.html',
		'./src/**/*.vue',
		'./src/**/*.jsx',
		'./src/**/*.js',
	],
	theme: {
		extend: {
			fontFamily: {
				barlow: ['Barlow', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
