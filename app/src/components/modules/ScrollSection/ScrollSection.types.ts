import type { Image, Link } from "@types"

export interface ScrollSectionProps {
	subheading: string
	heading: string
	description: string
	button: Link
	listItems: {
		title: string
		description: string
		icon: Image
	}[]
}
