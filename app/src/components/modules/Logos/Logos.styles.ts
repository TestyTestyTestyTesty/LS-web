import { Box, styled } from "@mui/material"
import { breakpointsEnum } from "@lib"

export const LogosWrapper = styled(Box, {
	name: "LogosWrapper",
})(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	gap: "2.35rem",
	padding: "3rem 1.3rem 2.6rem",
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		gap: "1.5rem",
		padding: "1.5rem 0 2rem",
	},
}))

export const LogosIconsWrapper = styled(Box, {
	name: "LogosIconsWrapper",
})(({ theme }) => ({
	display: "grid",
	justifyContent: "center",
	alignItems: "center",
	gap: "2rem",
	gridTemplateColumns: "repeat(8, 1fr)",
	[theme.breakpoints.down(breakpointsEnum.XL)]: {
		gap: "0.75rem",
	},
	[theme.breakpoints.down(breakpointsEnum.SM)]: {
		gap: "0.5rem 1.33rem",
		gridTemplateColumns: "repeat(4, 1fr)",
		gridTemplateRows: "1fr 1fr",
	},
}))

export const LogosIconWrapper = styled(Box, {
	name: "LogosIconWrapper",
})({
	boxSizing: "border-box",
	width: "100%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
})
