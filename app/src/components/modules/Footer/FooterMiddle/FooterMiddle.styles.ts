import { Box, styled } from "@mui/material"
import { breakpointsEnum } from "@lib"

export const FooterMiddleWrapper = styled(Box, {
	name: "FooterMiddleWrapper",
})(({ theme }) => ({
	padding: "2.5rem 0",
	[theme.breakpoints.down(breakpointsEnum.LG)]: {
		padding: "2.5rem 0 1.5rem",
	},
}))

export const FooterMiddleContent = styled(Box, {
	name: "FooterMiddleContent",
})(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: "2rem",
	[theme.breakpoints.down(breakpointsEnum.XL)]: {
		flexDirection: "column-reverse",
		gap: "4rem",
	},
}))

export const FooterMiddleLists = styled(Box, {
	name: "FooterMiddleLists",
})(({ theme }) => ({
	display: "grid",
	gridTemplateColumns: "repeat(4, 1fr)",
	gap: "1.25rem",
	[theme.breakpoints.down(breakpointsEnum.XL)]: {
		gridTemplateColumns: "repeat(2, 1fr)",
		gap: "3rem 1.5rem",
	},
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		gridTemplateColumns: "1fr",
		gap: "3rem",
	},
}))

export const FooterMiddleHighlightedWrapper = styled(Box, {
	name: "FooterMiddleHighlightedWrapper",
})(({ theme }) => ({
	display: "grid",
	gridTemplateColumns: "repeat(4, 1fr)",
	gap: "1.25rem",
	width: "100%",
	alignItems: "center",
	[theme.breakpoints.down(breakpointsEnum.XL)]: {
		alignItems: "flex-start",
		display: "flex",
		flexDirection: "column",
		gap: "2rem",
	},
}))

export const FooterMiddleHighlightedItems = styled(Box, {
	name: "FooterMiddleHighlightedItems",
})(({ theme }) => ({
	display: "grid",
	gridTemplateColumns: "repeat(3, 17.8rem)",
	gap: "1.25rem",
	[theme.breakpoints.down(breakpointsEnum.XL)]: {
		gridTemplateColumns: "repeat(3, 1fr)",
	},
	[theme.breakpoints.down(breakpointsEnum.LG)]: {
		gridTemplateColumns: "repeat(2, 1fr)",
	},
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		gap: "1.5rem",
	},
}))
