import { Box, styled, Typography } from "@mui/material"

export const DummyArrowLinkWrapper = styled(Box, {
	name: "DummyArrowLinkWrapper",
})({
	display: "flex",
	gap: "0.25rem",
})

export const DummyArrowLinkTypography = styled(Typography, {
	name: "DummyArrowLinkTypography",
})<{ color: string }>(({ color, theme }) => ({
	display: "flex",
	marginRight: "0.25rem",
	textDecoration: "none",
	color: color ? color : theme.palette.lsPrimary.p900,
}))
