import { getNextTheme, parseToNumber, removeLastChar } from '../../utils/helpers'

describe('parseToNumber', () => {
	test('positive number', () => {
		expect(parseToNumber('1,234,567.56')).toEqual(1234567.56)
		expect(parseToNumber('1234567.56')).toEqual(1234567.56)
		expect(parseToNumber('1234567')).toEqual(1234567)
	})
	test('negative number', () => {
		expect(parseToNumber('-1,234,567.56')).toEqual(-1234567.56)
		expect(parseToNumber('-1234567.56')).toEqual(-1234567.56)
		expect(parseToNumber('-1234567')).toEqual(-1234567)
	})
	test('positive number with dot in the end', () => {
		expect(parseToNumber('1,234,567.')).toEqual(1234567)
		expect(parseToNumber('1234567.')).toEqual(1234567)
	})
	test('negative number with dot in the end', () => {
		expect(parseToNumber('-1,234,567.')).toEqual(-1234567)
		expect(parseToNumber('-1234567.')).toEqual(-1234567)
	})
})

describe('getNextTheme', () => {
	const themes = ['first', 'second', 'third', 'last']
	test('if current theme is not last in array get next theme ', () => {
		expect(getNextTheme(themes, 'first')).toEqual('second')
		expect(getNextTheme(themes, 'second')).toEqual('third')
		expect(getNextTheme(themes, 'third')).toEqual('last')
	})
	test('if current theme is last in array get first theme ', () => {
		expect(getNextTheme(themes, 'last')).toEqual('first')
	})
})

describe('removeLastChar', () => {
	test('empty string', () => {
		expect(removeLastChar('')).toEqual('')
	})
	test('minus', () => {
		expect(removeLastChar('-')).toEqual('0')
	})
	test('zero', () => {
		expect(removeLastChar('0')).toEqual('0')
	})
	test('one digit positive number', () => {
		expect(removeLastChar('7')).toEqual('0')
	})
	test('one digit negative number', () => {
		expect(removeLastChar('-1')).toEqual('0')
	})
	test('several digits positive number', () => {
		expect(removeLastChar('123')).toEqual('12')
		expect(removeLastChar('123.5')).toEqual('123.')
		expect(removeLastChar('123.56')).toEqual('123.5')
	})
	test('several digits negative number', () => {
		expect(removeLastChar('-123')).toEqual('-12')
		expect(removeLastChar('-123.5')).toEqual('-123.')
		expect(removeLastChar('-123.56')).toEqual('-123.5')
	})
	test('dot in the end', () => {
		expect(removeLastChar('0.')).toEqual('0')
		expect(removeLastChar('123.')).toEqual('123')
	})
})

describe('getOutputValue', () => {
	test('', () => {
		expect('').toEqual('second')
	})
})