import Link from "next/link"
import { useState } from "react"

import { useBreakpoints } from "@lib"
import { useTheme } from "@mui/material"
import {
	ListType3ArrowItemIcon,
	ListType3ArrowItemTitle,
	ListType3ArrowItemTitleWrapper,
} from "./ListType3ArrowItem.styles"
import type { ListType3ArrowItemProps } from "./ListType3ArrowItem.types"
export const ListType3ArrowItem = ({ href, text }: ListType3ArrowItemProps) => {
	const [isHovered, setIsHovered] = useState(false)
	const theme = useTheme()
	const { isTablet } = useBreakpoints()
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
				<ListType3ArrowItemIcon
					isHovered={isHovered}
					sx={{ fontSize: "20px" }}
					customColor={theme.palette.defaultColors.black}
					hoverColor={theme.palette.lsPrimary.p400}
				/>
			</ListType3ArrowItemTitleWrapper>
		</Link>
	)
}
