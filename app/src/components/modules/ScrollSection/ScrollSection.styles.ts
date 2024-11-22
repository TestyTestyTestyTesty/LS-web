"use client"
import { breakpointsEnum } from "@lib"
import { Box, styled } from "@mui/material"

export const ScrollSectionContent = styled(Box, {
	name: "ScrollSectionContent",
})(({ theme }) => ({
	padding: "5rem 0",
	display: "flex",
	gap: "4.25rem",
	justifyContent: "space-between",
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		flexDirection: "column",
		gap: "4rem",
		padding: "4rem 0 5rem",
	},
}))

export const ScrollSectionTop = styled(Box, {
	name: "ScrollSectionTop",
})(({ theme }) => ({
	maxWidth: "36rem",
	position: "sticky",
	top: "6rem",
	paddingLeft: "1.5rem",
	marginBottom: "12.5rem",
	height: "fit-content",
	width: "100%",
	[theme.breakpoints.down(breakpointsEnum.XL)]: {
		maxWidth: "30rem",
	},
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		marginBottom: 0,
		position: "static",
	},
	"&:before": {
		content: "''",
		width: "1px",
		background: theme.palette.lsPrimary.p400,
		height: "100%",
		position: "absolute",
		top: 0,
		left: "0",
		[theme.breakpoints.down(breakpointsEnum.MD)]: {
			left: "0",
		},
	},
	"&:after": {
		content: "' '",
		width: "0.6rem",
		height: "0.6rem",
		background: theme.palette.lsPrimary.p400,
		top: 0,
		left: "-0.6rem",
		position: "absolute",
		borderRadius: "50%",
		transform: "translateX(55%)",
	},
}))

export const ScrollSectionBottom = styled(Box, {
	name: "ScrollSectionBottom",
})(({ theme }) => ({
	position: "relative",
	display: "flex",
	justifyContent: "space-between",
	gap: "2rem",
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		justifyContent: "flex-start",
	},
}))

export const ScrollContentLists = styled(Box, {
	name: "ScrollContentLists",
})(({ theme }) => ({
	width: "100%",
	maxWidth: "28rem",
	marginTop: "17rem",
	[theme.breakpoints.down(breakpointsEnum.XL)]: {
		maxWidth: "unset",
	},
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		marginTop: 0,
		maxWidth: "20rem",
	},
}))

export const ScrollContentList = styled(Box, {
	name: "ScrollContentList",
	shouldForwardProp: (prop) => prop !== "iamgeUrl",
})<{ imageUrl: string }>(({ theme, imageUrl }) => ({
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
		[theme.breakpoints.down(breakpointsEnum.MD)]: {
			top: 0,
		},
	},
	"&:after": {
		content: "' '",
		width: "4.5rem",
		height: "4.5rem",
		background: theme.palette.lsPrimary.p400,
		backgroundImage: `url(${imageUrl})`,
		backgroundSize: "40px",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		top: "-1rem",
		left: "0rem",
		position: "absolute",
		borderRadius: "50%",
		transform: "translateX(-50%)",
		[theme.breakpoints.down(breakpointsEnum.MD)]: {
			top: "0",
			transform: "translateX(-45%)",
			width: "0.6875rem",
			height: "0.6875rem",
			backgroundImage: "none",
		},
	},
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		paddingLeft: "1.5rem",
		paddingBottom: "3rem",
	},
}))
