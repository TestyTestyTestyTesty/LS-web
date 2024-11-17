"use client"
import { breakpointsEnum } from "@lib"
import { Box, styled } from "@mui/material"

export const CtaWrapper = styled(Box, {
	name: "CtaWrapper",
})({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	margin: "5.5rem 0 5rem",
	overflow: "hidden",
})

export const CtaHeadingWrapper = styled(Box, {
	name: "CtaHeadingWrapper",
})({
	textAlign: "center",
	maxWidth: "85rem",
	marginBottom: "3rem",
})

export const CtaSubHeadingWrapper = styled(Box, {
	name: "CtaSubHeadingWrapper",
})({
	marginBottom: "2.5rem",
})

export const CtaButtonWrapper = styled(Box, {
	name: "CtaButtonWrapper",
})(({ theme }) => ({
	display: "flex",
	gap: "0.5rem",
	marginBottom: "1.5rem",
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		width: "100%",
		gap: "1rem",
		flexDirection: "column",
		alignItems: "center",
		marginBottom: "2.5rem",
	},
}))

export const CtaLabels = styled(Box, {
	name: "CtaLabels",
})(({ theme }) => ({
	marginBottom: "3.5rem",
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		marginBottom: "2.5rem",
	},
}))
