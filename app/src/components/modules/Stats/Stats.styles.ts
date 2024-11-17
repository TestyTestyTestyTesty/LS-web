import { Box, styled } from "@mui/material"
import { breakpointsEnum } from "@lib"

export const StatsContent = styled(Box, {
	name: "StatsContent",
})({
	padding: "4rem 0 5rem",
})

export const StatsTilesWrapper = styled(Box, {
	name: "StatsTileWrapper",
})(({ theme }) => ({
	display: "grid",
	gap: 2,
	padding: "1rem 1.5rem",
	gridTemplateColumns: "repeat(4,1fr)",
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		gridTemplateColumns: "repeat(2, 1fr)",
		gap: 1,
	},
}))
