import { Box, styled } from "@mui/material"
import type { StatsTileWrapperProps } from "./StatsTile.types"
import { breakpointsEnum } from "@lib"

export const StatsTileWrapper = styled(Box, {
	name: "StatsTileWrapper",
})<StatsTileWrapperProps>(({ background, theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	width: "100%",
	height: "100%",
	maxHeight: "17.5rem",
	padding: "2.5rem 1rem",
	backgroundColor: theme.palette.lsNavy.n800,
	backgroundSize: "contain",
	backgroundPosition: "bottom",
	backgroundRepeat: "no-repeat",
	borderRadius: "1rem",
	gap: "0.5rem",
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		backgroundImage: "none",
	},
	[theme.breakpoints.up(breakpointsEnum.MD)]: {
		maxWidth: "17rem",
		backgroundImage: `url(${background?.url})`,
	},
}))
