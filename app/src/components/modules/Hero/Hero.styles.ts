"use client"
import { breakpointsEnum } from "@lib"
import { Box, styled, Typography } from "@mui/material"
import Image from "next/image"

export const HeroWrapper = styled(Box, {
	name: "HeroWrapper",
})(({ theme }) => ({
	margin: "5rem 0 0",
	[theme.breakpoints.down(breakpointsEnum.LG)]: {
		margin: "2.5rem 0 0",
	},
}))

export const HeroContent = styled(Box, {
	name: "HeroContent",
})({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
})

export const HeroSubheading = styled(Typography, {
	name: "HeroSubheading",
})(({ theme }) => ({
	marginBottom: "3rem",
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		marginBottom: "1.5rem",
	},
})) as typeof Typography

export const HeroHeading = styled(Typography, {
	name: "HeroHeading",
})(({ theme }) => ({
	textAlign: "center",
	maxWidth: "50rem",
	marginBottom: "3rem",
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		marginBottom: "1.5rem",
	},
})) as typeof Typography

export const HeroSubtitle = styled(Typography, {
	name: "HeroSubtitle",
})(({ theme }) => ({
	marginBottom: "2.5rem",
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		marginBottom: "1.5rem",
	},
})) as typeof Typography

export const HeroButtonWrapper = styled(Box, {
	name: "HeroButtonWrapper",
})(({ theme }) => ({
	display: "flex",
	gap: "0.5rem",
	marginBottom: "1.5rem",
	justifyContent: "center",
	[theme.breakpoints.down(breakpointsEnum.XL)]: {
		maxWidth: "32rem",
		width: "100%",
		gap: "0.5rem",
	},
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		gap: "1rem",
		flexDirection: "column",
		alignItems: "center",
	},
}))

export const HeroImage = styled(Image, {
	name: "HeroImage",
})({
	objectFit: "contain",
	height: "auto",
	maxWidth: "100%",
})

export const HeroVideoPlayButtonWrapper = styled(Box, {
	name: "HeroVideoPlayButtonWrapper",
})(({ theme }) => ({
	position: "absolute",
	margin: "0 auto",
	left: 0,
	right: 0,
	top: "25%",
	zIndex: 1,
	width: "fit-content",
	[theme.breakpoints.down(breakpointsEnum.LG)]: {
		top: "50%",
	},
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		top: "unset",
		bottom: 0,
	},
}))

export const HeroImageWrapper = styled(Box, {
	name: "HeroImageWrapper",
})(({ theme }) => ({
	position: "relative",
	maxWidth: "100%",
	width: "100%",
	display: "flex",
	justifyContent: "center",
	marginTop: "3rem",
	"&:after": {
		content: "''",
		position: "absolute",
		top: 0,
		width: "100%",
		height: "100%",
		background: " linear-gradient(180deg, rgba(255, 255, 255, 0.00) 19.25%, #FFF 95.52%)",
		left: 0,
	},
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		paddingBottom: "4rem",
	},
}))
