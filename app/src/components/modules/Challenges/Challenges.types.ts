import type { Image } from "@types"

export interface ChallengesProps {
	heading: string
	subheading: string
	challenges: Challenge[]
}

export type Challenge = {
	id: string
	heading: string
	subheading: string
	description: string
	icon: Image
	image: Image
}
