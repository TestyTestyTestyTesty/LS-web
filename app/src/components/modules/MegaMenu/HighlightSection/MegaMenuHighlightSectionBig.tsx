import { styled } from "@mui/system"

import { Box, Typography } from "@mui/material"

import { ArrowLink, Tag } from "@components"
import Image from "next/image"
import type { MegaMenuHighlightSectionProps } from "./MegaMenuHighlightSection.types"

export const MegaMenuHighlightSectionBig = ({
	lightAccent,
	highlightSection,
	darkAccent,
}: MegaMenuHighlightSectionProps) => {
	return (
		<HighlightSectionWrapper backgroundColor={lightAccent}>
			<Box sx={{ marginBottom: "0.75rem" }}>
				{highlightSection.tagText && (
					<Tag tagColor={highlightSection.tagColor} wide>
						<Typography variant="label">{highlightSection.tagText}</Typography>
					</Tag>
				)}
			</Box>
			{highlightSection.title && (
				<Box sx={{ marginBottom: "0.5rem" }}>
					<Title variant="defaultBtn">{highlightSection.title}</Title>
				</Box>
			)}
			{highlightSection.subtitle && (
				<Typography sx={{ marginBottom: "0.75rem" }}>{highlightSection.subtitle}</Typography>
			)}
			{highlightSection.link && (
				<Box sx={{ marginBottom: "0.75rem" }}>
					<ArrowLink
						title={highlightSection.link.title}
						href={highlightSection.link.href}
						color={darkAccent}
						hoverColor={darkAccent}
					/>
				</Box>
			)}
			{highlightSection.imageUrl && (
				<Image
					src={highlightSection.imageUrl}
					width="252"
					height="130"
					alt="image"
					style={{ objectFit: "contain" }}
				/>
			)}
		</HighlightSectionWrapper>
	)
}

const HighlightSectionWrapper = styled(Box, {
	name: "HighlightSectionWrapper",
})<{ backgroundColor: string }>(({ backgroundColor }) => ({
	padding: "1.5rem",
	background: backgroundColor,
	maxWidth: "20rem",
	display: "flex",
	flexDirection: "column",
}))

const Title = styled(Typography, {
	name: "Title",
})({
	fontWeight: "bold",
	marginBottom: "0.5rem",
})
