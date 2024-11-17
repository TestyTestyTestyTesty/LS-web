import type { Image, Link } from "@types"

export interface BannerProps {
	caption: string
	subheading: string
	heading: string
	button: Link
	participants: Image[]
	backgroundCards: string
}
