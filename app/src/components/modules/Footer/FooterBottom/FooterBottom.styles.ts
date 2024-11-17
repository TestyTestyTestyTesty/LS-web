import { Box, Link, styled } from "@mui/material"
import { breakpointsEnum } from "@lib"

export const FooterBottomWrapper = styled(Box, {
	name: "FooterBottomWrapper",
})(({ theme }) => ({
	background: theme.palette.lsNavy.n800,
}))

export const FooterBottomCopyright = styled(Box, {
	name: "FooterBottomCopyright",
})({
	display: "flex",
	alignItems: "center",
	gap: "0.5rem",
})

export const FooterBottomContent = styled(Box, {
	name: "FooterBottomContent",
})(({ theme }) => ({
	padding: "1.5rem 0",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	[theme.breakpoints.down(breakpointsEnum.LG)]: {
		flexDirection: "column",
		padding: "1.25rem 0 2.5rem",
		gap: "2.75rem",
	},
}))

export const FooterBottomLinks = styled(Box, {
	name: "FooterBottomLinks",
})(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	gap: "3rem",
	[theme.breakpoints.down(breakpointsEnum.XL)]: {
		gap: "1rem",
	},
	[theme.breakpoints.down(breakpointsEnum.LG)]: {
		gap: "1.75rem",
	},
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		display: "grid",
		gridTemplateColumns: "repeat(2, 1fr)",
		gap: "1.5rem 2.25rem",
	},
}))

export const FooterBottomLink = styled(Link, {
	name: "FooterBottomLink",
})(({ theme }) => ({
	color: theme.palette.defaultColors.white,
	textAlign: "center",
	"&:hover": {
		color: theme.palette.lsPrimary.p400,
	},
}))
