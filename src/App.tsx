import { useState } from 'react'
import './App.css'
import { controls, keyboard, operators, keys } from './data/keys'
import { operations } from './data/operations'
import { getKeyStyle } from './data/styles'
import { themeSwitcherStyles } from './data/themeSwitcherStyles'

function App() {
	const [firstValue, setFirstValue] = useState<string>('')
	const [secondValue, setSecondValue] = useState<string>('')
	const [operator, setOperator] = useState<string>('')
	const [theme, setTheme] = useState<number>(0)

	const isKeyOperator = (key: string) => Object.values(operators).includes(key)
	const removeLastDigit = (num: string) => {
		if (num) {
			return num.length > 1 ? num.slice(0, -1) : keys.ZERO
		}
		return num
	}
	const getFloatDigitsCount = (...values: string[]) => {
		return values.reduce((count, value) => {
			if (value.indexOf('.') !== -1) count += value.length - 2
			return count
		}, 0)
	}
	const getResult = (
		first: number,
		second: number,
		operation: (a: number, b: number) => number
	) => {
		const floatDigitsCount = getFloatDigitsCount(firstValue, secondValue)
		return (
			Math.round(operation(first, second) * 10 ** floatDigitsCount) /
			10 ** floatDigitsCount
		)
	}
	const addKey = (current: string, key: string) => {
		if (key === keys.DOT) {
			if (
				!current ||
				current === keys.ZERO ||
				current.indexOf(keys.DOT) === -1
			) {
				return (current || keys.ZERO) + keys.DOT
			}
			return current
		}
		if (key === keys.ZERO && current === keys.ZERO) return current
		else if (current === keys.ZERO && key !== keys.DOT) return key
		return current + key
	}

	function handleKeyClick(key: string) {
		if (key === controls.RESET) {
			setFirstValue('')
			setOperator('')
			setSecondValue('')
		} else if (key === controls.DEL) {
			if (!operator) {
				setFirstValue(prev => removeLastDigit(prev))
			} else if (firstValue) {
				setSecondValue(prev => removeLastDigit(prev))
			}
		} else if (key === keys.DOT) {
			if (!operator) {
				setFirstValue(prev => addKey(prev, key))
			} else if (firstValue) {
				setSecondValue(prev => addKey(prev, key))
			}
		} else if (key === controls.EQUAL) {
			if (!firstValue || !secondValue || !operator) return
			setFirstValue(
				getResult(+firstValue, +secondValue, operations[operator]).toString()
			)
			setOperator('')
			setSecondValue('')
		} else if (!operator && !isKeyOperator(key)) {
			setFirstValue(prev => addKey(prev, key))
		} else if (firstValue && isKeyOperator(key)) {
			setOperator(key)
		} else if (firstValue && operator) {
			setSecondValue(prev => addKey(prev, key))
		}
	}

	return (
		<div className='grid place-items-center content-start gap-5 h-screen bg-[#3a4764] p-6'>
			<div className='flex self-start w-full items-center my-2'>
				<h1 className='text-white text-3xl'>calc</h1>
				<small className='uppercase ml-auto mr-8 mt-6 text-white text-[12px] tracking-widest'>
					theme
				</small>
				<div className='flex flex-col'>
					<div className='flex justify-around text-white text-[12px]'>
						<p>1</p>
						<p>2</p>
						<p>3</p>
					</div>
					<div
						className='w-20 h-7 bg-[#232c43] rounded-full flex items-center p-[5px]'
						onClick={() => setTheme(prev => (prev + 1) % 3)}
					>
						<div
							className={`rounded-full w-[18px] h-[18px] bg-[#d03f2f] ${themeSwitcherStyles[theme]}`}
						></div>
					</div>
				</div>
			</div>
			<div className='w-full h-[6rem] bg-[#182034] rounded-xl flex items-center justify-end pr-6 pt-2 text-4xl text-white '>
				{!operator
					? firstValue || 0
					: firstValue && operator
					? secondValue || 0
					: NaN}
			</div>
			<div className='flex flex-wrap w-full bg-[#232c43] p-5 gap-4 rounded-xl'>
				{keyboard.map(key => (
					<button
						key={key}
						className={`grow w-14 h-16 grid place-items-center rounded-lg ${getKeyStyle(
							key
						)}`}
						onClick={() => handleKeyClick(key)}
					>
						{key}
					</button>
				))}
			</div>
		</div>
	)
}

export default App
