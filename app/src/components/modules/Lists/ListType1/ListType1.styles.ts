import { Box, List, styled, Typography } from "@mui/material"
import { breakpointsEnum } from "@lib"

export const ListType1Wrapper = styled(Box, {
	name: "ListType1Wrapper",
})(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: "0.5rem",
	padding: "0 1rem 0 0.5rem",
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		padding: 0,
		gap: "1rem",
	},
}))

export const ListType1List = styled(List, {
	name: "ListType1List",
})({
	padding: 0,
})

export const ListType1Header = styled(Typography, {
	name: "ListType1Header",
})(({ theme }) => ({
	padding: "0 0.5rem",
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		padding: 0,
	},
}))
