import { Box, Link, styled, Typography } from "@mui/material"

export const ArrowLinkWrapper = styled(Box, {
	name: "ArrowLinkWrapper",
})({
	display: "flex",
	gap: "0.25rem",
	alignItems: "center",
})

export const ArrowLinkTypography = styled(Typography, {
	name: "ArrowLinkTypography",
})({
	display: "flex",
	marginRight: "0.25rem",
	textDecoration: "none",
})

export const ArrowLinkLink = styled(Link, {
	name: "ArrowLinkLink",
})<{ color: string }>(({ color, theme }) => ({
	color: color ? color : theme.palette.lsPrimary.p900,
}))
