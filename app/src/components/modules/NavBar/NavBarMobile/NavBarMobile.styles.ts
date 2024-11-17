import { Box, styled } from "@mui/material"

export const NavBarMobileFixed = styled(Box, {
	name: "NavBarMobileFixed",
})(({ theme }) => ({
	background: theme.palette.defaultColors.white,
	zIndex: 1301,
	position: "fixed",
	width: "100%",
}))

export const NavBarMobileOuterWrapper = styled(Box, {
	name: "NavBarMobileOuterWrapper",
})(({ theme }) => ({
	background: theme.palette.defaultColors.white,
	zIndex: 1301,
	position: "fixed",
	top: 0,
	width: "100%",
	height: "auto",
}))

export const NavBarMobileTop = styled(Box, {
	name: "NavBarMobileTop",
})({
	height: "5rem",
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	gap: "0.5rem",
})

export const NavBarMobileButtons = styled(Box, {
	name: "NavBarMobileButtons",
})({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	gap: "0.5rem",
})

export const NavBarMobileTabletWrapper = styled(Box, {
	name: "NavBarMobileTabletWrapper",
})({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	gap: "2.5rem",
})

export const NavBarMobileBottom = styled(Box, {
	name: "NavBarMobileBottom",
})(({ theme }) => ({
	background: theme.palette.defaultColors.white,
	padding: "1rem 0 1.5rem",
	borderTop: `1px solid ${theme.palette.lsGrey.g400}`,
	borderBottom: `1px solid ${theme.palette.lsGrey.g400}`,
	overflow: "auto",
	maxHeight: "calc(100vh - 5rem)",
}))

export const NavBarMobileList = styled(Box, {
	name: "NavBarMobileList",
})({
	display: "flex",
	flexDirection: "column",
})
