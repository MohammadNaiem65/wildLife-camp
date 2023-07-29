/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				bree: ['Bree Serif', 'serif'],
				candal: ['Candal', 'sans-serif'],
			},
			colors: {
				primary: '#F2682A',
				secondary: '#5B9A42',
				'clr-bg': '#EFEEEA',
				'clr-bold': '#050505',
				'clr-base': '#8C8C8C',
			},
		},
	},
	plugins: [],
};
