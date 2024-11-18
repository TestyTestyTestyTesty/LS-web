"use client"
import { Box, styled } from "@mui/material"
import Image from "next/image"

export const InfographicDesktopFlowWrapper = styled(Box, {
	name: "InfographicDesktopFlowWrapper",
})({
	marginBottom: "5rem",
	marginLeft: "1.5rem",
	position: "relative",
})

export const InfographicDesktopFlowImageContainer = styled(Box, {
	name: "InfographicDesktopFlowImageContainer",
})(({ theme }) => ({
	position: "absolute",
	top: 0,
	left: 0,
	bottom: 0,
	right: 0,
	margin: "auto",
	width: "34.5rem",
	height: "13.5rem",
	zIndex: 1,
	"&:before": {
		content: "''",
		position: "absolute",
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		margin: "auto",
		width: "34.5rem",
		height: "8rem",
		background: theme.palette.lsPrimary.p1200,
		zIndex: -1,
		borderRadius: "1rem",
	},
}))

export const InforgraphicDesktopFlowImage = styled(Image, {
	name: "InforgraphicDesktopFlowImage",
	shouldForwardProp: (prop) => prop !== "fade",
})<{ fade: boolean }>(({ fade }) => ({
	objectFit: "contain",
	height: "100%",
	maxWidth: "100%",
	zIndex: 1,
	opacity: fade ? 0 : 1,
	transition: "opacity 0.3s ease-in",
}))
