import { Box, styled } from "@mui/material"
import React from "react"

export const ContentLine = () => {
	return <ContentLineStyled />
}

export const ContentLineStyled = styled(Box, {
	name: "ContentLineStyled",
})(({ theme }) => ({
	width: "1px",
	background: theme.palette.lsPrimary.p400,
	height: "100%",
	position: "absolute",
	top: 0,
	left: 0,
	"&:before": {
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
