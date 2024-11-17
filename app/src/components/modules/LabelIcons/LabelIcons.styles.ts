import { Box, styled } from "@mui/material"
import { breakpointsEnum } from "@lib"

export const LabelIconsWrapper = styled(Box, {
	name: "LabelIconsWrapper",
})(({ theme }) => ({
	display: "flex",
	gap: "1.5rem",
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		gap: "0.75rem",
		flexDirection: "column",
		alignItems: "center",
	},
}))
