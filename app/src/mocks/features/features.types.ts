import type { Image } from "@types"
export interface FeaturesMock {
	heading: string
	subheading: string
	button: Button
	features: Feature[]
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
