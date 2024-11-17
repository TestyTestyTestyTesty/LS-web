import { useEffect, useState } from "react"
import {
	CircleButtonDot,
	CircleButtonWrapper,
	InfographicPointWrapper,
	SpeechBubble,
	SpeechBubbleTypography,
} from "./InfographicPoint.styles"
import type { InfographicPointProps } from "@components/modules/Infographic/Infographic.types"
import type { Image } from "@types"

export const InfographicPoint = ({
	pointPosition,
	onClick,
	isActive,
	item,
}: {
	pointPosition: number
	onClick: (img: Image) => void
	isActive: boolean
	item: InfographicPointProps
}) => {
	const [isHovered, setIsHovered] = useState(false)
	const [isPulsing, setIsPulsing] = useState(false)
	const [hasPulsed, setHasPulsed] = useState(false)
	const handleBackgroundImageChange = () => {
		onClick(item.image)
	}

	const handleMouseEnter = () => {
		setIsHovered(true)
	}

	const handleMouseLeave = () => {
		setIsHovered(false)
	}

	useEffect(() => {
		if (!isActive && !isHovered && pointPosition === 2 && !hasPulsed) {
			setIsPulsing(true)
		} else {
			setIsPulsing(false)
			setHasPulsed(true)
		}
	}, [isActive, isHovered, hasPulsed, pointPosition])

	return (
		<InfographicPointWrapper
			pointPosition={pointPosition}
			onClick={handleBackgroundImageChange}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<SpeechBubble isActive={isActive} isHovered={isHovered}>
				<SpeechBubbleTypography variant="caption1" isActive={isActive}>
					{item.title}
				</SpeechBubbleTypography>
			</SpeechBubble>
			<CircleButtonWrapper isActive={isActive} isPulsing={isPulsing} isHovered={isHovered}>
				<CircleButtonDot />
			</CircleButtonWrapper>
		</InfographicPointWrapper>
	)
}
