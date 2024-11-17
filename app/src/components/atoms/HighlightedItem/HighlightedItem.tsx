import { Typography, useTheme } from "@mui/material"
import Image from "next/image"
import type { HighlightedItemProps } from "./HighlightIedtem.types"
import { HighlightedItemLink } from "./HighlightedItem.styles"
import Link from "next/link"
import { useState } from "react"

export const HighlightedItem = ({ title, href, imageUrl }: HighlightedItemProps) => {
	const theme = useTheme()
	const [isHovered, setIsHovered] = useState(false)
	return (
		<Link href={href} passHref legacyBehavior>
			<HighlightedItemLink
				underline="none"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<Image src={imageUrl} width={64} height={64} alt={title} style={{ objectFit: "contain" }} />
				<Typography
					variant="navBtn"
					color={isHovered ? theme.palette.lsPrimary.p800 : theme.palette.defaultColors.black}
				>
					{title}
				</Typography>
			</HighlightedItemLink>
		</Link>
	)
}
