import { keys, operators } from '../data/keys'

export const isKeyOperator = (key: string) =>
	Object.values(operators).includes(key)

export const removeLastChar = (num: string) => {
	return num.length === 1 || !Number.isFinite(parseToNumber(num))
		? keys.ZERO
		: num.length > 1
		? num.slice(0, -1)
		: num
}

export const addKey = (current: string, key: string) => {
	if (key === keys.DOT) {
		if (!current || current === keys.ZERO || current.indexOf(keys.DOT) === -1) {
			return (current || keys.ZERO) + keys.DOT
		}
		return current
	} else if (key === keys.ZERO && current === keys.ZERO) {
		return current
	} else if (current === keys.ZERO && key !== keys.DOT) {
		return key
	}

	return current + key
}

export const getNextTheme = (themes: string[], currentTheme: string) => {
	const currentThemeIdx = themes.indexOf(currentTheme)
	return themes[(currentThemeIdx + 1) % themes.length]
}

export const parseToNumber = (value: string) => {
	return +value.replace(/,/g, '')
}

export const getOutputValue = (value: string) => {
	return (
		parseToNumber(value).toLocaleString('en-US', {
			maximumFractionDigits: 10
		}) + (value.at(-1) === keys.DOT ? keys.DOT : '')
	)
}
