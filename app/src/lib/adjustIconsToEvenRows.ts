import type { Image } from "@types"

export const adjustIconsToEvenRows = (icons: Image[]) => {
	if (icons.length % 8 === 0) return icons

	const adjustedIcons = [...icons]
	while (adjustedIcons.length % 8 !== 0) {
		adjustedIcons.pop()
	}
	return adjustedIcons
}
