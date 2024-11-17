import { Box, styled } from "@mui/material"
import { breakpointsEnum } from "@lib"
import React from "react"

export const SideLine = ({ color }: { color?: string }) => {
	return <SideLineStyled lineColor={color} />
}

export const SideLineStyled = styled(Box, {
	name: "SideLine",
	shouldForwardProp: (prop) => prop !== "lineColor",
})<{ lineColor?: string }>(({ lineColor, theme }) => ({
	width: "1px",
	background: lineColor ? lineColor : theme.palette.lsPrimary.p1100,
	height: "100%",
	position: "absolute",
	top: 0,
	left: "2.5rem",
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		left: "1.25rem",
	},
}))
