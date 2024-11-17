import { ContainerLarge, HighlightedItem, ListType3, LivespaceStatus } from "@components"
import { Typography, useMediaQuery, useTheme } from "@mui/material"
import { breakpointsEnum } from "@lib"
import { useId } from "react"
import {
	FooterMiddleContent,
	FooterMiddleHighlightedItems,
	FooterMiddleHighlightedWrapper,
	FooterMiddleLists,
	FooterMiddleWrapper,
} from "./FooterMiddle.styles"
import type { FooterMiddleProps } from "./FooterMiddle.types"

export const FooterMiddle = ({ lists, highlightedContent }: FooterMiddleProps) => {
	const theme = useTheme()
	const isTablet = useMediaQuery(theme.breakpoints.down(breakpointsEnum.LG))
	return (
		<FooterMiddleWrapper>
			<ContainerLarge>
				<FooterMiddleContent>
					{isTablet && <LivespaceStatus size="sm" />}
					<FooterMiddleLists>
						{lists.map((list) => (
							<ListType3 title={list.title} items={list.items} key={useId()} />
						))}
					</FooterMiddleLists>
					<FooterMiddleHighlightedWrapper>
						<Typography variant={isTablet ? "h6" : "h5"}>{highlightedContent.title}</Typography>
						<FooterMiddleHighlightedItems>
							{highlightedContent.links.map((item) => (
								<HighlightedItem {...item} key={useId()} />
							))}
						</FooterMiddleHighlightedItems>
					</FooterMiddleHighlightedWrapper>
				</FooterMiddleContent>
			</ContainerLarge>
		</FooterMiddleWrapper>
	)
}
