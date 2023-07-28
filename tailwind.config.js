/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				bree: ['Bree Serif', 'serif'],
				candal: ['Candal', 'sans-serif']
			},
		},
	},
	plugins: [],
};

