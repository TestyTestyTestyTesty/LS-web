import { Box, ListItem, styled, Link } from "@mui/material"
import { breakpointsEnum } from "@lib"

export const ListType2Link = styled(Link, {
	name: "ListType2Link",
})<{ backgroundColor: string }>(({ backgroundColor, theme }) => ({
	width: "100%",
	backgroundColor: theme.palette.defaultColors.white,
	borderRadius: "0.1875rem",
	color: theme.palette.defaultColors.black,
	"&:hover": {
		backgroundColor: backgroundColor,
	},
}))

export const ListType2ContentWrapper = styled(Box, {
	name: "ListType2ContentWrapper",
})(({ theme }) => ({
	display: "flex",
	gap: "1rem",
	alignItems: "flex-start",
	padding: "1rem 0.75rem",
	borderRadius: "0.1875rem",
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		padding: "0.5rem 0",
	},
}))

export const ListType2TextWrapper = styled(Box, {
	name: "ListType2TextWrapper",
})({
	display: "flex",
	flexDirection: "column",
	gap: "0.25rem",
	flex: "1",
})

export const ListType2Wrapper = styled(ListItem, {
	name: "ListType2Wrapper",
})({
	padding: 0,
})

export const ListType2ImageWrapper = styled(Box, {
	name: "ListType2ImageWrapper",
})(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	width: "2.5rem",
	height: "2.5rem",
	backgroundColor: theme.palette.defaultColors.white,
	borderRadius: "0.35rem",
	boxShadow: "0 0.125rem 1rem 0 rgba(36, 41, 59, 0.15)",
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		width: "4rem",
		height: "4rem",
	},
}))
