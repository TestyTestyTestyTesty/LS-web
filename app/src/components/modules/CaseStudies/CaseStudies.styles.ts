import { Box, styled, Typography } from "@mui/material"
import { breakpointsEnum } from "@lib"

export const CaseStudiesWrapper = styled(Box, {
	name: "CaseStudiesWrapper",
})(({ theme }) => ({
	backgroundColor: theme.palette.lsNavy.n800,
	padding: "5rem 0",
	overflow: "hidden",
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		padding: "4rem 0",
	},
}))

export const CaseStudiesContent = styled(Box, {
	name: "CaseStudiesContent",
})(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	textAlign: "center",
	gap: "2.5rem",
	marginBottom: "4rem",
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		marginBottom: "3.5rem",
		gap: "2rem",
	},
}))

export const CaseStudiesSubheading = styled(Typography, {
	name: "CaseStudiesSubheading",
})(({ theme }) => ({
	color: theme.palette.defaultColors.white,
}))

export const CaseStudiesHeading = styled(Typography, {
	name: "CaseStudiesHeading",
})(({ theme }) => ({
	color: theme.palette.defaultColors.white,
}))
