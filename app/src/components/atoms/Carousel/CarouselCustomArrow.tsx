import { ArrowLeft } from "@svg/ReactComponents/ArrowLeft"
import { ArrowRight } from "@svg/ReactComponents/ArrowRight"
import type { ArrowProps } from "react-multi-carousel"
import { CustomArrowWrapper } from "./CarouselCustomArrow.styles"
type CustomArrowProps =
	| (ArrowProps & { left: true; right?: never })
	| (ArrowProps & { right: true; left?: never })

export const CarouselCustomArrow = ({ onClick, left, right }: CustomArrowProps) => {
	return (
		<CustomArrowWrapper
			onClick={onClick}
			sx={{
				left: left ? 0 : "auto",
				right: right ? 0 : "auto",
			}}
		>
			{left && <ArrowLeft />}
			{right && <ArrowRight />}
		</CustomArrowWrapper>
	)
}
