import { controls } from './keys'

const grayStyle = 'bg-[#637097] shadow-[inset_0_-4px_#404e72] text-xl text-white'

export const getKeyStyle = (key: string) => {
	switch (key) {
		case controls.DEL:
			return grayStyle
		case controls.RESET:
			return grayStyle
		case controls.EQUAL:
			return 'bg-[#d03f2f] shadow-[inset_0_-4px_#93261a] text-white text-xl'
		default:
			return 'bg-[#eae3dc] shadow-[inset_0_-4px_#b4a597] text-3xl text-[#444b5a]'
	}
}
