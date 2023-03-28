import { controls } from './keys'

const controlsStyles =
	'bg-control controls-shadow text-xl md:text-[28px] text-white hover:bg-controlHover transition'

export const getKeyStyle = (key: string) => {
	switch (key) {
		case controls.DEL:
			return controlsStyles
		case controls.RESET:
			return controlsStyles
		case controls.EQUAL:
			return 'bg-equal equal-shadow text-equalText text-xl md:text-3xl hover:bg-equalHover transition'
		default:
			return 'bg-key key-shadow text-3xl md:text-[35px] text-veryDark hover:bg-keyHover transition'
	}
}

export const themeSwitcherStyles: Record<number, string> = {
	0: 'translate-x-[0px] transition duration-300',
	1: 'translate-x-[26px] transition duration-300',
	2: 'translate-x-[52px] transition duration-300'
}
