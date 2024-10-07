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
					50: '#ecfdea',
					100: '#d8fad5',
					200: '#b1f6ab',
					300: '#8bf181',
					400: '#64ed57',
					500: '#3de82d',
					600: '#31ba24',
					700: '#258b1b',
					800: '#185d12',
					900: '#0c2e09',
				},
			},
		},
	},
	plugins: [flowbitePlugin],
};
