import { Box, Typography, useTheme } from "@mui/material"

import { ArrowLink, ConditionalLinkWrapper, DummyArrowLink, Tag } from "@components"
import { useBreakpoints } from "@lib"
import type { MegaMenuHighlightSectionProps } from "./MegaMenuHighlightSection.types"
import {
	BottomWrapper,
	HighlightSectionWrapper,
	Title,
	TopWrapper,
} from "./MegaMenuHighlightSectionSmall.styles"

export const MegaMenuHighlightSectionSmall = ({
	lightAccent,
	darkAccent,
	highlightSection,
}: MegaMenuHighlightSectionProps) => {
	const theme = useTheme()
	const { isMobile } = useBreakpoints()
	return (
		<ConditionalLinkWrapper href={highlightSection.link.href} shouldWrap={isMobile}>
			<HighlightSectionWrapper backgroundColor={lightAccent}>
				<TopWrapper>
					{highlightSection.title && (
						<Title variant="defaultBtn" color={theme.palette.defaultColors.black}>
							{highlightSection.title}
						</Title>
					)}
					{highlightSection.tagText && (
						<Tag tagColor={highlightSection.tagColor} wide>
							<Typography variant="label" color={theme.palette.defaultColors.black}>
								{highlightSection.tagText}
							</Typography>
						</Tag>
					)}
				</TopWrapper>
				<BottomWrapper>
					{highlightSection.subtitle && (
						<Typography color={theme.palette.defaultColors.black}>
							{highlightSection.subtitle}
						</Typography>
					)}
					{highlightSection.link && (
						<Box>
							{isMobile ? (
								<DummyArrowLink
									title={highlightSection.link.title}
									color={darkAccent}
									showText={false}
								/>
							) : (
								<ArrowLink
									title={highlightSection.link.title}
									href={highlightSection.link.href}
									color={darkAccent}
								/>
							)}
						</Box>
					)}
				</BottomWrapper>
			</HighlightSectionWrapper>
		</ConditionalLinkWrapper>
	)
}
