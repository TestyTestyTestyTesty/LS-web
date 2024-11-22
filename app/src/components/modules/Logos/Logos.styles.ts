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
	padding: "3rem 0 2.6rem",
	position: "relative",
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		gap: "1.5rem",
		padding: "1.5rem 0 2rem",
	},
	"&:before, &:after": {
		content: "''",
		height: "1px",
		background: `linear-gradient(to right, transparent, ${theme.palette.lsGrey.g400}, transparent)`,
		width: "100%",
		position: "absolute",
	},
	"&:before": {
		top: 0,
	},
	"&:after": {
		bottom: 0,
	},
}))

export const LogosIconsWrapper = styled(Box, {
	name: "LogosIconsWrapper",
})(({ theme }) => ({
	display: "grid",
	justifyContent: "space-between",
	alignItems: "center",
	gap: "1rem",
	width: "100%",
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
