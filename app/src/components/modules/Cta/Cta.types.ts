import type { Image, Link } from "@types"

export interface CtaProps {
	subheading: string
	heading: string
	buttons: Link[]
	labelIcons: {
		title: string
		iconUrl: string
	}[]
	icons: Image[]
}
