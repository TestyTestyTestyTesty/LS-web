import { breakpointsEnum } from "@lib"
import { Box, styled } from "@mui/material"
export const ChallengesWrapper = styled(Box, {
	name: "ChallengesWrapper",
})(({ theme }) => ({
	background: theme.palette.lsGrey.g25,
}))
export const ChallengesInsideWrapper = styled(Box, {
	name: "ChallengesInsideWrapper",
})(({ theme }) => ({
	padding: "2rem 0 0 0",
	backgroundColor: theme.palette.lsGrey.g25,
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
