import { Box, styled } from "@mui/material"

export const StripedLineWrapper = styled(Box, {
	name: "StripedLineWrapper",
})({
	display: "flex",
	width: "100%",
	gap: "0.2rem",
})

export const StripedLineItem = styled(Box, {
	name: "StripedLineItem",
})<{ length: "short" | "long" }>(({ theme, length }) => ({
	height: "2px",
	width: length === "short" ? "3px" : "5px",
	borderRadius: "5000rem",
	opacity: 0.5,
	backgroundColor: theme.palette.defaultColors.white,
}))
