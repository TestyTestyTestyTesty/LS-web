import { styled } from "@mui/system"

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material"

import { ArrowLink, ConditionalLinkWrapper, DummyArrowLink, Tag } from "@components"
import { breakpointsEnum } from "@lib"
import type { MegaMenuHighlightSectionProps } from "./MegaMenuHighlightSection.types"

export const MegaMenuHighlightSectionSmall = ({
	lightAccent,
	darkAccent,
	highlightSection,
}: MegaMenuHighlightSectionProps) => {
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down(breakpointsEnum.MD))
	return (
		<>
			<ConditionalLinkWrapper href={highlightSection.link.href}>
				<HighlightSectionWrapper backgroundColor={lightAccent}>
					<TopWrapper>
						{highlightSection.title && (
							<Title variant="defaultBtn" color={theme.palette.defaultColors.black}>
								{highlightSection.title}
							</Title>
						)}
						{highlightSection.tagText && (
							<Tag tagColor={highlightSection.tagColor} wide>
								<Typography variant="label">{highlightSection.tagText}</Typography>
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
							<Box sx={{ marginBottom: "0.75rem" }}>
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
		</>
	)
}

const HighlightSectionWrapper = styled(Box, {
	name: "HighlightSectionWrapper",
})<{ backgroundColor: string }>(({ backgroundColor }) => ({
	padding: "1rem 1.25rem",
	background: backgroundColor,
	borderRadius: "0.1875rem",
	display: "flex",
	flexDirection: "column",
	gap: "0.5rem",
}))

const Title = styled(Typography, {
	name: "Title",
})({
	fontWeight: "bold",
})

const TopWrapper = styled(Box, {
	name: "TopWrapper",
})({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "flex-start",
	gap: "0.5rem",
})

const BottomWrapper = styled(Box, {
	name: "BottomWrapper",
})(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "flex-start",
	gap: "0.5rem",
	flexDirection: "column",
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		flexDirection: "row",
	},
}))
