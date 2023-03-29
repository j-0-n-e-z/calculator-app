import { operators } from './keys'

export const operations = {
	[operators.PLUS]: (a: number, b: number) => a + b,
	[operators.MINUS]: (a: number, b: number) => a - b,
	[operators.MULTIPLY]: (a: number, b: number) => a * b,
	[operators.DIVIDE]: (a: number, b: number) => a / b
}
