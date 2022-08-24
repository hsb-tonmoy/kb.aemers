const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	darkMode: 'class',
	theme: {
		extend: {
			screens: {
				'3xl': '2000px'
			},
			colors: {
				primary: '#7443FF',
				primaryDarker: '#5F27FF',
				secondary: '#232323',
				lightText: '#898989',
				lighterText: '#727272',
				borderColor: '#E3D9FF',
				bgColor: '#F9F6FF',
				dividerColor: '#BEBEBE'
			},
			width: {
				120: '30rem'
			},
			inset: {
				12.5: '12.5%'
			},
			fontFamily: {
				primary: ['Red Hat Display', 'sans-serif'],
				secondary: ['Barlow', 'sans-serif']
			},
			gridTemplateColumns: {
				'max-content-1': 'repeat(1, minmax(0, max-content))',
				'max-content-2': 'repeat(2, minmax(0, max-content))',
				'max-content-3': 'repeat(3, minmax(0, max-content))',
				'max-content-large': 'repeat(auto-fit, minmax(600px, 1fr))'
			}
		}
	},

	plugins: [
		require('@tailwindcss/forms')({
			strategy: 'class'
		})
	]
};

module.exports = config;
