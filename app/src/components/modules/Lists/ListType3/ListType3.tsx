"use client"
import { Typography, useMediaQuery, useTheme } from "@mui/material"
import { useId } from "react"
import type { ListType3Props } from "./ListType3.types"

import { ListType3Item } from "@components"

import { ListType3ArrowItem } from "@components/atoms/ListType3ArrowItem/ListType3ArrowItem"
import { ListType3List, ListType3TitleWrapper, ListType3Wrapper } from "./ListType3.styles"
import { breakpointsEnum } from "@lib"

export const ListType3 = ({ title, items }: ListType3Props) => {
	const theme = useTheme()
	const isTablet = useMediaQuery(theme.breakpoints.down(breakpointsEnum.LG))
	return (
		<ListType3Wrapper>
			{title.href ? (
				<ListType3TitleWrapper>
					<ListType3ArrowItem href={title.href} text={title.text} />
				</ListType3TitleWrapper>
			) : (
				<ListType3TitleWrapper>
					<Typography variant={isTablet ? "h5" : "h6"}>{title.text}</Typography>
				</ListType3TitleWrapper>
			)}

			{items && (
				<ListType3List>
					{items.map((listItem) => (
						<ListType3Item key={useId()} {...listItem} />
					))}
				</ListType3List>
			)}
		</ListType3Wrapper>
	)
}
