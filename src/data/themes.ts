export const themes = ['dark', 'light', 'neon']

const commonStyles = 'transition duration-300'
export const switcherStyles: Record<string, string> = {
	dark: `translate-x-[0px] ${commonStyles}`,
	light: `translate-x-[26px] ${commonStyles}`,
	neon: `translate-x-[52px] ${commonStyles}`
}
