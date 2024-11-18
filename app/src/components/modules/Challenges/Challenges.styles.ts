import { breakpointsEnum } from "@lib"
import { Box, styled } from "@mui/material"

export const ChallengesWrapper = styled(Box, {
	name: "ChallengesWrapper",
})(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: "3rem",
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		gap: "2rem",
	},
}))

export const ChallengesContainer = styled(Box, {
	name: "ChallengesContainer",
})({
	display: "flex",
	flexDirection: "column",
	gap: "2rem",
	padding: "2rem 0",
})
