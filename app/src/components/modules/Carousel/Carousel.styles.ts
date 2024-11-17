import { Box, styled } from "@mui/material"
import { breakpointsEnum } from "@lib"
import { Swiper, SwiperSlide } from "swiper/react"

export const CarouselWrapper = styled(Box, {
	name: "CarouselWrapper",
})({
	maxWidth: "80rem",
	margin: "0 auto",
	width: "100%",
	position: "relative",
})

export const CarouselSwiper = styled(Swiper, {
	name: "CarouselSwiper",
})(({ theme }) => ({
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		overflow: "visible",
	},
}))

export const CarouselSwiperSlide = styled(SwiperSlide, {
	name: "CarouselSwiperSlide",
})`
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	&.swiper-slide {
		height: auto;
		transition: all 0.4s;
		filter: grayscale(50%) brightness(70%);
	}
	&.swiper-slide-active {
		filter: grayscale(0%) brightness(100%);
	}
`
