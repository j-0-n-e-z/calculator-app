import { keys, operators } from '../data/keys'

export const isKeyOperator = (key: string) =>
	Object.values(operators).includes(key)

export const removeLastDigit = (num: string) => {
	return num.length === 1 || !Number.isFinite(+num)
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
