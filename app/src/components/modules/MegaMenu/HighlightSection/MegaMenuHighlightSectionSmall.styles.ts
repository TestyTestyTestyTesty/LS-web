import { breakpointsEnum } from "@lib"
import { Box, styled, Typography } from "@mui/material"

export const HighlightSectionWrapper = styled(Box, {
	name: "HighlightSectionWrapper",
})<{ backgroundColor: string }>(({ backgroundColor }) => ({
	padding: "1rem 1.25rem",
	background: backgroundColor,
	borderRadius: "0.1875rem",
	display: "flex",
	flexDirection: "column",
	gap: "0.5rem",
}))

export const Title = styled(Typography, {
	name: "Title",
})({
	fontWeight: "bold",
})

export const TopWrapper = styled(Box, {
	name: "TopWrapper",
})({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "flex-start",
	gap: "0.5rem",
})

export const BottomWrapper = styled(Box, {
	name: "BottomWrapper",
})(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "flex-start",
	gap: "0.5rem",
	flexDirection: "column",
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		flexDirection: "row",
	},
}))
