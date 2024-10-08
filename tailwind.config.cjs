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
					50: '#f5f7f5',
					100: '#ebf0eb',
					200: '#d6e1d8',
					300: '#c2d1c4',
					400: '#adc2b1',
					500: '#99b39d',
					600: '#7a8f7e',
					700: '#5c6b5e',
					800: '#3d483f',
					900: '#1f241f',
				},
			},
		},
	},
	plugins: [flowbitePlugin],
};
