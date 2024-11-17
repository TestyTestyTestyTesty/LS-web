import { Box, ListItem, styled, Link } from "@mui/material"
import { breakpointsEnum } from "@lib"

export const ListType1ItemLink = styled(Link, {
	name: "ListType1ItemLink",
})<{ backgroundColor: string }>(({ backgroundColor, theme }) => ({
	width: "100%",
	backgroundColor: theme.palette.defaultColors.white,
	borderRadius: "0.1875rem",
	color: theme.palette.defaultColors.black,
	"&:hover": {
		backgroundColor: backgroundColor,
	},
}))

export const ListType1ItemWrapper = styled(Box, {
	name: "ListType1ItemWrapper",
})(({ theme }) => ({
	display: "flex",
	gap: "0.5rem",
	alignItems: "center",
	padding: "0.75rem 0.5rem",
	borderRadius: "0.1875rem",
	[theme.breakpoints.down(breakpointsEnum.LG)]: {
		padding: "0.75rem 0",
	},
}))

export const ListType1ItemListItem = styled(ListItem, {
	name: "ListType1ItemListItem",
})({
	padding: 0,
})

export const ListType1ItemImageWrapper = styled(Box, {
	name: "ListType1ItemImageWrapper",
})(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	width: "1.5rem",
	height: "1.5rem",
	backgroundColor: theme.palette.defaultColors.white,
	borderRadius: "0.125rem",
	[theme.breakpoints.down(breakpointsEnum.LG)]: {
		width: "2.5rem",
		height: "2.5rem",
	},
}))

export const ListType1ItemTextWrapper = styled(Box, {
	name: "ListType1ItemTextWrapper",
})({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	width: "100%",
	flex: "1",
	gap: "1rem",
})
