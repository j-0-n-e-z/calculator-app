/** @type {import('tailwindcss').Config} */
const { createThemes } = require('tw-colors')

module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {}
	},
	plugins: [
		createThemes({
			dark: {
				main: 'hsl(222,26%,31%)',
				keypad: 'hsl(223, 31%, 20%)',
				screen: 'hsl(224, 36%, 15%)',
				control: 'hsl(225, 21%, 49%)',
				controlShadow: 'hsl(224, 28%, 35%)',
				controlHover: '#a0b4df',
				key: 'hsl(30, 25%, 89%)',
				keyShadow: 'hsl(28, 16%, 65%)',
				keyHover: '#fff',
				equal: 'hsl(6, 63%, 50%)',
				equalShadow: 'hsl(6, 70%, 34%)',
				equalHover: '#fe6e5d',
				veryDark: 'hsl(221, 14%, 31%)',
				text: '#fff',
				equalText: '#fff'
			},
			light: {
				main: 'hsl(0, 0%, 90%)',
				keypad: 'hsl(0, 5%, 81%)',
				screen: 'hsl(0, 0%, 93%)',
				control: 'hsl(185, 42%, 37%)',
				controlShadow: 'hsl(185, 58%, 25%)',
				controlHover: '#5ab4bc',
				key: 'hsl(45, 7%, 89%)',
				keyShadow: 'hsl(35, 11%, 61%)',
				keyHover: '#fff',
				equal: 'hsl(25, 98%, 40%)',
				equalShadow: 'hsl(25, 99%, 27%)',
				equalHover: '#ff8b40',
				veryDark: 'hsl(60, 10%, 19%)',
				text: 'hsl(221, 14%, 31%)',
				equalText: '#fff'
			},
			neon: {
				main: 'hsl(268, 75%, 9%)',
				keypad: 'hsl(268, 71%, 12%)',
				screen: 'hsl(268, 71%, 12%)',
				control: 'hsl(281, 89%, 26%)',
				controlShadow: 'hsl(285, 91%, 52%)',
				controlHover: '#873bac',
				key: 'hsl(268, 47%, 21%)',
				keyShadow: 'hsl(290, 70%, 36%)',
				keyHover: '#6b3ca9',
				equal: 'hsl(176, 100%, 44%)',
				equalShadow: 'hsl(177, 92%, 70%)',
				equalHover: '#8bfef9',
				veryDark: 'hsl(52, 100%, 62%)',
				text: 'hsl(52, 100%, 62%)',
				equalText: 'hsl(198, 20%, 13%)'
			}
		})
	]
}
