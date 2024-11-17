"use client"
import { Box, styled } from "@mui/material"
import { breakpointsEnum } from "@lib"

export const InfographicWrapper = styled(Box, {
	name: "InfographicWrapper",
})(({ theme }) => ({
	background: theme.palette.lsNavy.n800,
}))

export const InfographicContent = styled(Box, {
	name: "InfographicContent",
})(({ theme }) => ({
	padding: "6rem 0 2.8rem",
	display: "flex",
	flexDirection: "column",
	gap: "15rem",
	[theme.breakpoints.down(breakpointsEnum.XL)]: {
		gap: "5rem",
		padding: "5rem 0 4.5rem",
	},
}))

export const InfographicHeading = styled(Box, {
	name: "InfographicHeading",
})({
	maxWidth: "30rem",
})

export const InfographicBottom = styled(Box, {
	name: "InfographicBottom",
})(({ theme }) => ({
	position: "relative",
	[theme.breakpoints.down(breakpointsEnum.XL)]: {
		margin: "0 auto",
	},
}))
