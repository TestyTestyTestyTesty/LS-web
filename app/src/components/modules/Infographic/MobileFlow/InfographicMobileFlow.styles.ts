"use client"
import { Box, styled, Typography } from "@mui/material"
import Image from "next/image"

const getMarginBottom = (itemPosition: number): string => {
	const marginMap: { [key: number]: string } = {
		1: "3.5rem",
		2: "2.7rem",
		3: "2.5rem",
		4: "3.5rem",
	}

	// Return the margin from the map or default to "0"
	return marginMap[itemPosition] || "0"
}

export const InfographicMobileFlowWrapper = styled(Box, {
	name: "InfographicMobileFlowWrapper",
})({
	display: "flex",
	height: "516px",
	margin: "0 auto",
	position: "relative",
})

export const InforgraphicMobileFlowImage = styled(Image, {
	name: "InforgraphicMobileFlowImage",
})({
	objectFit: "contain",
	maxWidth: "100%",
	height: "516px",
	position: "absolute",
	top: 0,
	left: 0,
})

export const InfographicMobileFlowContent = styled(Box, {
	name: "InfographicMobileFlowContent",
})({
	display: "flex",
	flexDirection: "column",
	position: "relative",
	height: "516px",
	width: "100%",
	maxWidth: "32rem",
})

export const InfographicMobileFlowFlowLineWrapper = styled(Box, {
	name: "InfographicMobileFlowFlowLineWrapper",
})({
	position: "absolute",
	top: 0,
	bottom: 0,
	margin: "auto",
	display: "flex",
	alignItems: "center",
	right: "10.4rem",
})

export const InfographicMobileFlowItemText = styled(Typography, {
	name: "InfographicMobileFlowItemText",
})({
	display: "block",
	width: "100%",
	maxWidth: "9.75rem",
	marginLeft: "9.5rem",
})

export const InfographicMobileFlowItem = styled(Box, {
	name: "InfographicMobileFlowItem",
	shouldForwardProp: (prop) => prop !== "itemPosition",
})<{ itemPosition: number }>(({ itemPosition }) => {
	return {
		height: "4rem",
		display: "flex",
		position: "relative",
		width: "20rem",
		justifyContent: "flex-end",
		marginBottom: getMarginBottom(itemPosition),
	}
})
