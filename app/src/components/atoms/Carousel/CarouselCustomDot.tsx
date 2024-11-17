import { Box } from "@mui/material"
import type { DotProps } from "react-multi-carousel"
import { CarouselCustomDotItem } from "./CarouselCustomDot.styles"

export const CarouselCustomDot = ({ onClick, active }: DotProps) => {
	return (
		<Box onClick={onClick}>
			<CarouselCustomDotItem active={active} />
		</Box>
	)
}
