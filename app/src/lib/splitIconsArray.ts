import type { Image } from "@types"

export const splitIconsArray = (icons: Image[]) => {
	const midPoint = Math.ceil(icons.length / 2)
	const firstHalf = icons.slice(0, midPoint)
	const secondHalf = icons.slice(midPoint)

	return [firstHalf, secondHalf]
}
