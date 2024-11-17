import type { ReactNode } from "react"
import type { SwiperProps } from "swiper/react"

export interface CarouselProps {
	cards: ReactNode[]
	carouselProps?: SwiperProps
	slidesPerView: SlidesPerView
}

export type SlidesPerView = {
	xxs: number
	xs: number
	sm: number
	md: number
	lg: number
	xl: number
}
