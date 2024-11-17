import { Box, styled } from "@mui/material"
import { breakpointsEnum } from "@lib"
import Image from "next/image"

export const IconSetWrapper = styled(Box, {
	name: "IconSetWrapper",
})(({ theme }) => ({
	display: "grid",
	gridTemplateColumns: "repeat(11, 1fr)",
	justifyContent: "center",
	alignItems: "center",
	gap: "1rem",
	[theme.breakpoints.down(breakpointsEnum.XL)]: {
		gridTemplateColumns: "repeat(8, 1fr)",
	},
}))

export const IconSetImage = styled(Image, {
	name: "IconSetImage",
})({
	objectFit: "contain",
	height: "auto",
})
