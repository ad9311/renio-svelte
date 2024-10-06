import flowbitePlugin from 'flowbite/plugin';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
	],
	darkMode: 'selector',
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#faf8fc',
					100: '#f3eef9',
					200: '#eae0f4',
					300: '#d9c7eb',
					400: '#bfa3dd',
					500: '#9e74c8',
					600: '#9063ba',
					700: '#7a4fa1',
					800: '#674485',
					900: '#54386b',
					950: '#371f4c',
				},
				secondary: {
					50: '#fdfae9',
					100: '#fcf3c5',
					200: '#fae58e',
					300: '#f7d04d',
					400: '#f2b81d',
					500: '#db9b0f',
					600: '#c37b0b',
					700: '#9c570c',
					800: '#814512',
					900: '#6e3915',
					950: '#401c08',
				},
			},
		},
	},
	plugins: [flowbitePlugin],
};
