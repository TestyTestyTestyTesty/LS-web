import type { SlidesPerView } from "@components/modules/Carousel/Carousel.types"
import { useMediaQuery, useTheme } from "@mui/material"

export const useSlidesPerView = (slidesPerViewConfig: SlidesPerView) => {
	const theme = useTheme()

	const isXl = useMediaQuery(theme.breakpoints.up("xl"))
	const isLg = useMediaQuery(theme.breakpoints.up("lg"))
	const isMd = useMediaQuery(theme.breakpoints.up("md"))
	const isSm = useMediaQuery(theme.breakpoints.up("sm"))
	const isXs = useMediaQuery(theme.breakpoints.up("xs"))

	if (isXl) return slidesPerViewConfig.xl

	if (isLg) return slidesPerViewConfig.lg

	if (isMd) return slidesPerViewConfig.md

	if (isSm) return slidesPerViewConfig.sm

	if (isXs) return slidesPerViewConfig.xs

	return slidesPerViewConfig.xxs
}
