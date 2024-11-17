import type { Image } from "@types"
export interface StatsProps {
	title: string
	buttonLabel: string
	description: string
	tiles: Tile[]
	lead: string
}

export type Tile = {
	id: string
	title: string
	stats: string
	message: string
	backgroundImage: Image
}
