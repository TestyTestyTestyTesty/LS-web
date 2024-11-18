import type { Image } from "@types"
export interface FeatureTileProps {
	heading: { url: string; label: string }
	description: string
	image: Image
}
