import { breakpointsEnum } from "@lib"
import { Box, styled } from "@mui/material"
import { Theme as theme } from "@styles"
import Image from "next/image"

export const TileWrapper = styled(Box, {
	name: "TileWrapper",
})({
	display: "flex",
	flexDirection: "column",
	width: "100%",
	height: "100%",
	maxWidth: "22.25rem",
	borderRadius: "1rem",
	backgroundColor: "white",
	overflow: "hidden",
	[theme.breakpoints.down(breakpointsEnum.LG)]: {
		maxWidth: "16.25 rem",
	},
})

export const TileImage = styled(Image, {
	name: "TileImage",
})({
	objectFit: "contain",
	height: "auto",
	maxWidth: "100%",
})
