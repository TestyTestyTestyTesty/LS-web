import { breakpointsEnum } from "@lib"
import { Box, styled, Typography } from "@mui/material"

export const MegaMenuBottomSectionWrapper = styled(Box, {
	name: "MegaMenuBottomSectionWrapper",
})(({ theme }) => ({
	display: "flex",
	width: "100%",
	gap: "1rem",
	alignItems: "center",
	justifyContent: "space-between",
	borderTop: `1px solid ${theme.palette.lsGrey.g400}`,
	paddingTop: "0.8rem",
	[theme.breakpoints.down(breakpointsEnum.XL)]: {
		border: "none",
		padding: "1.5rem 0 2rem",
		flexDirection: "column",
		gap: "1.5rem",
	},
}))

export const MegaMenuBottomSectionTextWrapper = styled(Box, {
	name: "MegaMenuBottomSectionTextWrapper",
})(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	[theme.breakpoints.down(breakpointsEnum.XL)]: {
		gap: "1rem",
		alignItems: "center",
	},
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		gap: "0.5rem",
	},
}))

export const MenuBottomSectionTypography = styled(Typography, {
	name: "MenuBottomSectionTypography",
})(({ theme }) => ({
	[theme.breakpoints.down(breakpointsEnum.XL)]: {
		textAlign: "center",
	},
}))
