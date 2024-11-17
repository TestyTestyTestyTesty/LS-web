import type { Image } from "@types"

export interface InfographicProps {
	title: string
	subtitle: string
	points: InfographicPointProps[]
}
export type InfographicPointProps = {
	title: string
	image: Image
}
