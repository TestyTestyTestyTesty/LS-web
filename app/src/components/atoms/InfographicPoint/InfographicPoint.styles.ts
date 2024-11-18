"use client"
import { Box, keyframes, styled, Typography } from "@mui/material"

const pulse = keyframes`
	0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(255,255,255, 0.7);
	}

	70% {
		transform: scale(1);
		box-shadow: 0 0 0 10px rgba(255,255,255, 0);
	}

	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(255,255,255, 0);
	}
`

const getBottomPosition = (pointPosition: number): string => {
	const bottomPositionMap: { [key: number]: string } = {
		1: "9.4rem",
		2: "20.5rem",
		3: "20.5rem",
		4: "20.5rem",
	}

	return bottomPositionMap[pointPosition] || "9.4rem"
}

const getLeftPosition = (pointPosition: number): string => {
	const leftPositionMap: { [key: number]: string } = {
		1: "1.5rem",
		2: "17rem",
		3: "32rem",
		4: "47rem",
	}

	return leftPositionMap[pointPosition] || "62rem"
}

export const CircleButtonWrapper = styled(Box, {
	name: "CircleButtonWrapper",
	shouldForwardProp: (prop) => prop !== "isHovered" && prop !== "isActive" && prop !== "isPulsing",
})<{ isActive: boolean; isHovered: boolean; isPulsing: boolean }>(
	({ theme, isActive, isHovered, isPulsing }) => ({
		background: isActive || isHovered ? theme.palette.defaultColors.white : "#3a3f4f",
		width: "2.5rem",
		height: "2.5rem",
		border: `3px solid ${theme.palette.defaultColors.white}`,
		borderRadius: "50000rem",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		cursor: "pointer",
		transition: "all 0.3s",
		zIndex: 2,
		animation: isPulsing ? `${pulse} 2s ease infinite` : "none",
		transformOrigin: "center",
		position: "relative",
		"&:after": {
			transition: "all 0.3s",
			content: "' '",
			position: "absolute",
			width: isHovered && !isActive ? "3.25rem" : "2.5rem",
			height: isHovered && !isActive ? "3.25rem" : "2.5rem",
			background: isHovered && !isActive && theme.palette.defaultColors.white,
			borderRadius: "50000rem",
			zIndex: -1,
		},
	}),
)
export const CircleButtonDot = styled(Box, {
	name: "CircleButtonDot",
})(({ theme }) => ({
	width: "0.56rem",
	height: "0.56rem",
	background: theme.palette.lsPrimary.p400,
	borderRadius: "50000rem",
}))

export const SpeechBubble = styled(Box, {
	name: "SpeechBubble",
	shouldForwardProp: (prop) => prop !== "isActive" && prop !== "isHovered",
})<{ isActive: boolean; isHovered: boolean }>(({ theme, isActive, isHovered }) => ({
	padding: "1.5rem 1rem",
	background: isActive
		? theme.palette.lsPrimary.p300
		: isHovered
			? theme.palette.lsPrimary.p400
			: theme.palette.lsPrimary.p1200,
	border: `2px solid ${theme.palette.lsPrimary.p1000}`,
	borderColor: isActive
		? theme.palette.lsPrimary.p300
		: isHovered
			? theme.palette.lsPrimary.p400
			: theme.palette.lsPrimary.p1000,
	width: "12.8rem",
	borderRadius: "1rem",
	position: "relative",
	cursor: "pointer",
	transition: "all 0.3s",
	"&:before": {
		position: "absolute",
		bottom: "-4.4rem",
		right: 0,
		left: 0,
		margin: "0 auto",
		content: "' '",
		height: "4.4rem",
		width: "2px",
		background:
			isHovered && !isActive ? theme.palette.lsPrimary.p400 : theme.palette.lsPrimary.p1000,
		transition: "all 0.3s",
	},
	"&:after": {
		position: "absolute",
		bottom: "-0.4rem",
		borderRadius: "50000rem",
		right: 0,
		left: 0,
		margin: "0 auto",
		content: "' '",
		height: "0.56rem",
		width: "0.56rem",
		transition: "all 0.3s",
		background: isActive
			? theme.palette.defaultColors.white
			: isHovered
				? theme.palette.lsPrimary.p400
				: theme.palette.lsPrimary.p1000,
	},
}))

export const SpeechBubbleTypography = styled(Typography, {
	name: "SpeechBubbleTypography",
	shouldForwardProp: (prop) => prop !== "isActive",
})<{ isActive: boolean }>(({ theme, isActive }) => ({
	color: isActive ? theme.palette.lsNavy.n800 : theme.palette.defaultColors.white,
}))

export const InfographicPointWrapper = styled(Box, {
	name: "InfographicPointWrapper",
	shouldForwardProp: (prop) => prop !== "pointPosition",
})<{ pointPosition: number }>(({ pointPosition }) => ({
	gap: "3rem",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	width: "fit-content",
	position: "absolute",
	bottom: getBottomPosition(pointPosition),
	left: getLeftPosition(pointPosition),
}))
