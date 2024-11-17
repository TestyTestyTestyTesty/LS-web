import { Box, styled } from "@mui/material"

export const MegaMenuDesktopWrapper = styled(Box, {
	name: "MegaMenuDesktopWrapper",
})(({ theme }) => ({
	display: "flex",
	border: `1px solid ${theme.palette.lsGrey.g400}`,
	borderRadius: "0.5rem",
	boxShadow: "0 1rem 1.875.rem -0.375rem rgba(0,0,0,0.15)",
	position: "fixed",
	top: "4.5rem",
	margin: "0 auto",
	width: "max-content",
	overflow: "hidden",
	zIndex: 1500,
	left: 0,
	right: 0,
}))

export const MegaMenuDesktopRightSectionWrapper = styled(Box, {
	name: "MegaMenuDesktopRightSectionWrapper",
})(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
	padding: "1.5rem 1rem",
	width: "100%",
	background: theme.palette.defaultColors.white,
}))

export const MegaMenuDesktopListsWrapper = styled(Box, {
	name: "MegaMenuDesktopListsWrapper",
})({
	display: "flex",
	gap: "1rem",
	"& > *": {
		flex: 1,
	},
})

export const MegaMenuDesktopListsOuterWrapper = styled(Box, {
	name: "MegaMenuDesktopListsOuterWrapper",
})({
	display: "flex",
	gap: "1rem",
})
