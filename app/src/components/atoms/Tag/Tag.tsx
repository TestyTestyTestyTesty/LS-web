"use client"

import { TagWrapper } from "./Tag.styles"
import type { TagProps } from "./Tag.types"

export const Tag = ({ children, wide = false, tagColor = "" }: TagProps) => {
	return (
		<TagWrapper wide={wide} backgroundColor={tagColor}>
			{children}
		</TagWrapper>
	)
}
