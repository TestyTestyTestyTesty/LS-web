import type { Image } from "@types"

export interface MarqueeCarouselProps {
	direction: "normal" | "reverse"
	icons: Image[]
	speed?: number
	itemGap?: number
	itemWidth?: number
	itemHeight?: number
}
