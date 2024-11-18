import { ContainerLarge, HighlightedItem, ListType3 } from "@components"
import { FakeLivespaceStatus } from "@components/atoms/FakeLivespaceStatus/FakeLivespaceStatus"
import { useBreakpoints } from "@lib"
import { Typography, useTheme } from "@mui/material"
import { useId } from "react"
import {
	FooterMiddleContent,
	FooterMiddleHighlightedItems,
	FooterMiddleHighlightedWrapper,
	FooterMiddleLists,
	FooterMiddleWrapper,
} from "./FooterMiddle.styles"
import type { FooterMiddleProps } from "./FooterMiddle.types"

export const FooterMiddle = ({ lists, highlightedContent, status }: FooterMiddleProps) => {
	const theme = useTheme()
	const { isTabletWide } = useBreakpoints()

	const highlightedItems = (
		<>
			{highlightedContent.links.map((item) => (
				<HighlightedItem {...item} key={useId()} />
			))}
		</>
	)
	return (
		<FooterMiddleWrapper>
			<ContainerLarge>
				<FooterMiddleContent>
					{isTabletWide && (
						<FakeLivespaceStatus color={theme.palette.defaultColors.black} status={status} />
					)}
					<FooterMiddleLists>
						{lists.map((list) => (
							<ListType3 title={list.title} items={list.items} key={useId()} />
						))}
					</FooterMiddleLists>

					<FooterMiddleHighlightedWrapper>
						<Typography variant={isTabletWide ? "h5" : "h6"}>{highlightedContent.title}</Typography>
						{isTabletWide ? (
							<FooterMiddleHighlightedItems>{highlightedItems}</FooterMiddleHighlightedItems>
						) : (
							<>{highlightedItems}</>
						)}
					</FooterMiddleHighlightedWrapper>
				</FooterMiddleContent>
			</ContainerLarge>
		</FooterMiddleWrapper>
	)
}
