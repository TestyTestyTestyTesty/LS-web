import { IconArrow } from "@svg/ReactComponents/IconArrow"
import Link from "next/link"
import { useState } from "react"
import {
	ListType3ArrowItemTitle,
	ListType3ArrowItemTitleWrapper,
} from "./ListType3ArrowItem.styles"
import { useMediaQuery, useTheme } from "@mui/material"
import { breakpointsEnum } from "@lib"
import type { ListType3ArrowItemProps } from "./ListType3ArrowItem.types"
export const ListType3ArrowItem = ({ href, text }: ListType3ArrowItemProps) => {
	const [isHovered, setIsHovered] = useState(false)
	const theme = useTheme()
	const isTablet = useMediaQuery(theme.breakpoints.down(breakpointsEnum.LG))
	return (
		<Link
			href={href}
			style={{ textDecoration: "none" }}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<ListType3ArrowItemTitleWrapper>
				<ListType3ArrowItemTitle variant={isTablet ? "h5" : "h6"} isHovered={isHovered}>
					{text}
				</ListType3ArrowItemTitle>
				<IconArrow isHovered={isHovered} />
			</ListType3ArrowItemTitleWrapper>
		</Link>
	)
}
