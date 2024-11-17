import type { Image } from "@types"
export type StatsTileWrapperProps = {
	background?: Image
}
export interface StatsTileProps {
	title: string
	stats: string
	message: string
	background?: Image
}
