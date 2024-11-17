import { Box, styled } from "@mui/material"

export const CustomArrowWrapper = styled(Box, {
	name: "CustomArrowWrapper",
})({
	position: "absolute",
	transition: "all .5s",
	zIndex: "1000",
	minWidth: "2.5rem",
	minHeight: "2.5rem",
	cursor: "pointer",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
})
