"use client"

import Link from "next/link"
import { useState } from "react"
import {
	ArrowLinkIcon,
	ArrowLinkLink,
	ArrowLinkTypography,
	ArrowLinkWrapper,
} from "./ArrowLink.styles"
import type { ArrowLinkProps } from "./ArrowLink.types"

export const ArrowLink = ({
	title,
	typographyVariant,
	href,
	color = "#000",
	hoverColor = "#000",
}: ArrowLinkProps) => {
	const [isHovered, setIsHovered] = useState(false)
	return (
		<Link href={href} passHref legacyBehavior>
			<ArrowLinkLink
				color={color}
				underline="none"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<ArrowLinkWrapper>
					<ArrowLinkTypography
						variant={typographyVariant ? typographyVariant : "linkArrow"}
						isHovered={isHovered}
						customColor={color}
						hoverColor={hoverColor}
					>
						{title}
					</ArrowLinkTypography>
					<ArrowLinkIcon isHovered={isHovered} customColor={color} hoverColor={hoverColor} />
				</ArrowLinkWrapper>
			</ArrowLinkLink>
		</Link>
	)
}
