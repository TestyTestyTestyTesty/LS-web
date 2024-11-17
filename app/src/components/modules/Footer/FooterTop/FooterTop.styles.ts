import { Box, styled } from "@mui/material"
import { breakpointsEnum } from "@lib"
import Link from "next/link"

export const FooterTopWrapper = styled(Box, {
	name: "FooterTopWrapper",
})(({ theme }) => ({
	borderTop: `1px solid ${theme.palette.lsGrey.g400}`,
	borderBottom: `1px solid ${theme.palette.lsGrey.g400}`,
	padding: "0.5rem 0",
	[theme.breakpoints.down(breakpointsEnum.LG)]: {
		padding: "1rem 0",
	},
}))

export const FooterTopContent = styled(Box, {
	name: "FooterTopContent",
})({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
})

export const FooterTopIcons = styled(Box, {
	name: "FooterTopIcons",
})(({ theme }) => ({
	gap: "0.5rem",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	[theme.breakpoints.down(breakpointsEnum.LG)]: {
		gap: "1.5rem",
	},
}))

export const FooterTopIconLink = styled(Link, {
	name: "FooterTopIconLink",
})({
	display: "flex",
})
