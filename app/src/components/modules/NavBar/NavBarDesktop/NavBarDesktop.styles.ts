import { Box, styled } from "@mui/material"

export const NavBarDesktopOuterWrapper = styled(Box, {
	name: "NavBarDesktopOuterWrapper",
})(({ theme }) => ({
	background: theme.palette.defaultColors.white,
	zIndex: 1301,
	position: "fixed",
	top: 0,
	width: "100%",
	height: "5rem",
}))

export const NavBarDesktopWrapper = styled(Box, {
	name: "NavBarDesktopWrapper",
})({
	display: "flex",
	alignItems: "center",
	height: "100%",
	justifyContent: "space-between",
	gap: "0.5rem",
})

export const NavBarDesktopLeftSection = styled(Box, {
	name: "NavBarDesktopLeftSection",
})({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	gap: "0.5rem",
})

export const NavBarDesktopLogoWrapper = styled(Box, {
	name: "NavBarDesktopLogoWrapper",
})({
	marginRight: "1rem",
})

export const NavBarDesktopRightSection = styled(Box, {
	name: "NavBarDesktopRightSection",
})({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	gap: "0.5rem",
})
