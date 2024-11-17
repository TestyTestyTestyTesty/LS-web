import { useBreakpoints } from "@lib"
import { useSlidesPerView } from "@lib"
import "@styles/carouselStyles.css"
import { useId } from "react"
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper"
import "swiper/css/bundle"
import { CarouselSwiper, CarouselSwiperSlide, CarouselWrapper } from "./Carousel.styles"
import type { CarouselProps } from "./Carousel.types"

export const Carousel = ({ cards, carouselProps, slidesPerView }: CarouselProps) => {
	const { isMobileWide, isTablet } = useBreakpoints()
	const slidesPerViewConfig = useSlidesPerView(slidesPerView)

	return (
		<CarouselWrapper>
			<CarouselSwiper
				spaceBetween={16}
				loop={true}
				slidesPerView={slidesPerViewConfig}
				centeredSlides={true}
				navigation={!isMobileWide}
				pagination={isTablet}
				modules={[Autoplay, EffectFade, Navigation, Pagination]}
				style={{ paddingBottom: isTablet ? "3rem" : 0 }}
				{...carouselProps}
			>
				{cards.map((card) => (
					<CarouselSwiperSlide key={useId()}>{card}</CarouselSwiperSlide>
				))}
			</CarouselSwiper>
		</CarouselWrapper>
	)
}
