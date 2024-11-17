"use client"
import { Box, styled, Typography } from "@mui/material"

export const LabelIconWrapper = styled(Box, {
	name: "LabelIconWrapper",
})({
	display: "flex",
	alignItems: "center",
	gap: "0.5rem",
})

export const LabelIconText = styled(Typography, {
	name: "LabelIconText",
})(({ theme }) => ({
	color: theme.palette.lsGrey.g900,
	fontWeight: 500,
})) as typeof Typography
