"use client"
import { Box, styled } from "@mui/material"
import { breakpointsEnum } from "@lib"

export const ContainerStyles = styled(Box, {
	name: "ContainerStyles",
})(({ theme }) => ({
	maxWidth: "80rem",
	margin: "0 auto",
	padding: "0 2.5rem",
	height: "100%",
	width: "100%",
	position: "relative",
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		padding: "0 1.25rem",
	},
}))

export const ContainerSmall = styled(ContainerStyles, {
	name: "ContainerSmall",
})({
	maxWidth: "67.5rem",
})

export const ContainerLarge = styled(ContainerStyles, {
	name: "ContainerLarge",
})({
	maxWidth: "90rem",
})
