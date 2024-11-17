import type { Image, Link } from "@types"

export interface ScrollSectionProps {
	subheading: string
	heading: string
	description: string
	button: Link
	background: Image
	listItems: {
		title: string
		description: string
	}[]
	icons: Image[]
}
