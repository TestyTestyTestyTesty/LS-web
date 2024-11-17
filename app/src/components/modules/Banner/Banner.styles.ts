"use client"
import { breakpointsEnum } from "@lib"
import { Box, styled } from "@mui/material"
import Image from "next/image"

export const BannerWrapper = styled(Box, {
	name: "BannerWrapper",
	shouldForwardProp: (prop) => prop !== "backgroundCards",
})<{ backgroundCards: string }>(({ theme, backgroundCards }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	padding: "3rem 0 3.25rem",
	background: theme.palette.lsNavy.n800,
	borderRadius: "1.5rem",
	margin: "5rem 0 7.5rem",
	position: "relative",
	overflow: "hidden",
	zIndex: 1,
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		padding: "3rem 1rem 3rem",
		margin: "5rem 0",
	},
	"&:before": {
		zIndex: -1,
		content: "''",
		position: "absolute",
		bottom: "-3rem",
		left: "-3rem",
		height: "17.5rem",
		width: "19.6rem",
		backgroundImage: "url(/banner-bg-left.webp)",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		[theme.breakpoints.down(breakpointsEnum.MD)]: {
			content: "none",
		},
	},
	"&:after": {
		zIndex: -1,
		content: "''",
		position: "absolute",
		bottom: "-1rem",
		right: "0rem",
		height: "25.5rem",
		width: "19.5rem",
		backgroundImage: `url(${backgroundCards})`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		[theme.breakpoints.down(breakpointsEnum.MD)]: {
			height: "12rem",
			width: "24rem",
			right: "0rem",
		},
	},
}))

export const BannerHeadingWrapper = styled(Box, {
	name: "BannerHeadingWrapper",
})(({ theme }) => ({
	textAlign: "center",
	maxWidth: "40rem",
	marginBottom: "2.75rem",
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		marginBottom: "2.5rem",
	},
}))

export const BannerCaptionWrapper = styled(Box, {
	name: "BannerCaptionWrapper",
})(({ theme }) => ({
	marginBottom: "2.25rem",
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		marginBottom: "3rem",
	},
}))

export const BannerButtonWrapper = styled(Box, {
	name: "BannerButtonWrapper",
})(({ theme }) => ({
	[theme.breakpoints.down(breakpointsEnum.LG)]: {
		marginBottom: "2.75rem",
	},
}))

export const BannerSubHeadingWrapper = styled(Box, {
	name: "BannerSubHeadingWrapper",
})(({ theme }) => ({
	marginBottom: "1.75rem",
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		marginBottom: "1.5rem",
	},
}))

export const BannerParticipantsWrapper = styled(Box, {
	name: "BannerParticipantsWrapper",
})(({ theme }) => ({
	display: "flex",
	position: "absolute",
	bottom: "1.3rem",
	left: "1.3rem",
	[theme.breakpoints.down(breakpointsEnum.LG)]: {
		position: "static",
	},
}))

export const BannerParticipantImage = styled(Image, {
	name: "BannerParticipantImage",
})({
	"&:not(:first-of-type)": {
		marginLeft: "-1rem",
	},
	objectFit: "contain",
	filter: "drop-shadow(0px  0.75rem  1rem rgba(9, 9, 22, 0.08))",
})
