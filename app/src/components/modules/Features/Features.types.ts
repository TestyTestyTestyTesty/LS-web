import type { Image } from "@types"

export interface FeaturesProps {
	heading: string
	subheading: string
	features: Feature[]
	button: Button
}

export type Feature = {
	id: string
	heading: { url: string; label: string }
	description: string
	image: Image
}

export type Button = {
	type: "text" | "contained" | "outlined"
	label: string
	link: string
}
