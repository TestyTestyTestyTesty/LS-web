"use client"
import { breakpointsEnum } from "@lib"
import type { Theme } from "@mui/material"
import { Box, styled } from "@mui/material"
import { InView } from "react-intersection-observer"

export const ScrollSectionContent = styled(Box, {
	name: "ScrollSectionContent",
})(({ theme }) => ({
	padding: "5rem 0",
	display: "flex",
	flexDirection: "column",
	gap: "4.25rem",
	[theme.breakpoints.down(breakpointsEnum.LG)]: {
		gap: "1.5rem",
	},
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		gap: "4rem",
		padding: "4rem 0 5rem",
	},
}))

export const ScrollSectionTop = styled(Box, {
	name: "ScrollSectionTop",
})(({ theme }) => ({
	maxWidth: "36rem",
	[theme.breakpoints.down(breakpointsEnum.XL)]: {
		maxWidth: "20rem",
	},
}))

export const ScrollSectionBottom = styled(Box, {
	name: "ScrollSectionBottom",
})(({ theme }) => ({
	position: "relative",
	display: "flex",
	justifyContent: "space-between",
	gap: "2rem",
	[theme.breakpoints.down(breakpointsEnum.LG)]: {
		justifyContent: "flex-end",
	},
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		justifyContent: "flex-start",
	},
}))

export const ScrollSectionImageWrapper = styled(Box, {
	name: "ScrollSectionImageWrapper",
})(({ theme }) => ({
	display: "flex",
	marginLeft: "2rem",
	width: "33.5rem",
	height: "33.5rem",
	position: "sticky",
	top: "100px",
	[theme.breakpoints.down(breakpointsEnum.XL)]: {
		width: "28.125rem",
		height: "28.125rem",
	},
}))

const getIconSpecificStyles = (position: number, theme: Theme) => {
	switch (position) {
		case 0:
			return {
				top: "10%",
				left: "2%",
				borderRadius: "0.5rem",
			}
		case 1:
			return { top: "65%", left: "0%", borderRadius: "0.5rem" }
		case 2:
			return {
				bottom: "30%",
				right: "-10%",
				borderRadius: "5rem",
				[theme.breakpoints.down(breakpointsEnum.XL)]: {
					right: "0",
				},
			}
		case 3:
			return {
				top: "49%",
				right: "4%",
				boxShadow: "none",
				[theme.breakpoints.down(breakpointsEnum.XL)]: {
					top: "47.7%",
					right: "4.2%",
				},
			}
		default:
			return {
				bottom: "0%",
				right: "0",
				borderRadius: "0.5rem",
				[theme.breakpoints.down(breakpointsEnum.XL)]: {
					bottom: "-10%",
				},
			}
	}
}

export const ScrollSectionIconWrapper = styled(Box, {
	name: "ScrollSectionIconWrapper",
	shouldForwardProp: (prop) => prop !== "iconPosition" && prop !== "isVisible",
})<{ iconPosition: number; isVisible: boolean }>(({ theme, iconPosition, isVisible }) => ({
	position: "absolute",
	opacity: isVisible ? 1 : 0,
	transition: "all 0.3s ease-in",
	transform: isVisible ? "scale(1)" : "scale(0.5)",
	transitionDelay: iconPosition === 2 ? "0.5s" : "0s",
	display: "flex",
	overflow: "hidden",
	boxShadow: "0px 1.5rem 2.5rem 0px rgba(36, 41, 59, 0.15)",
	...getIconSpecificStyles(iconPosition, theme),
}))

export const ScrollContentLists = styled(Box, {
	name: "ScrollContentLists",
})(({ theme }) => ({
	width: "100%",
	maxWidth: "28rem",
	marginTop: "17rem",
	[theme.breakpoints.down(breakpointsEnum.LG)]: {
		marginTop: 0,
		maxWidth: "20rem",
	},
}))

export const ScrollContentList = styled(InView, {
	name: "ScrollContentList",
})(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: "2rem",
	paddingBottom: "8.5rem",
	position: "relative",
	paddingLeft: "3.25rem",
	"&:last-of-type": {
		paddingBottom: 0,
		"&:before": {
			content: "none",
		},
	},
	"&:before": {
		content: "' '",
		width: "1px",
		height: "100%",
		background: theme.palette.lsPrimary.p400,
		top: "1rem",
		left: "0",
		position: "absolute",
	},
	"&:after": {
		content: "' '",
		width: "0.6rem",
		height: "0.6rem",
		background: theme.palette.lsPrimary.p400,
		top: "1rem",
		left: "0rem",
		position: "absolute",
		borderRadius: "50%",
		transform: "translateX(-45%)",
		[theme.breakpoints.down(breakpointsEnum.LG)]: {
			top: "0.5rem",
		},
	},
	[theme.breakpoints.down(breakpointsEnum.LG)]: {
		paddingLeft: "1.5rem",
		paddingBottom: "3rem",
	},
}))
