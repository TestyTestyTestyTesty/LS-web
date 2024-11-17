import Image from "next/image"
import React from "react"
import { LabelIconText, LabelIconWrapper } from "./LabelIcon.styles"
import type { LabelIconProps } from "./LabelIcon.types"

export const LabelIcon = ({ iconUrl, title }: LabelIconProps) => {
	return (
		<LabelIconWrapper>
			<Image src={iconUrl} width={16} height={16} alt={title} />
			<LabelIconText variant="caption1" component="p">
				{title}
			</LabelIconText>
		</LabelIconWrapper>
	)
}
