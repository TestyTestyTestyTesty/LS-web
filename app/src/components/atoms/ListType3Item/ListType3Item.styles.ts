import { Box, Link, ListItem, styled } from "@mui/material"
import { breakpointsEnum } from "@lib"

export const ListType3ItemLink = styled(Link, {
	name: "ListType3ItemLink",
})(({ theme }) => ({
	color: theme.palette.defaultColors.black,
	"&:hover": {
		color: theme.palette.lsPrimary.p400,
	},
}))

export const ListType3ItemContentWrapper = styled(Box, {
	name: "ListType3ItemContentWrapper",
})({
	display: "flex",
	gap: "1rem",
	alignItems: "flex-start",
})

export const ListType3ItemTitleWrapper = styled(Box, {
	name: "ListType3ItemTitleWrapper",
})({
	padding: "1rem 0",
})

export const ListType3ItemTextWrapper = styled(Box, {
	name: "ListType3ItemTextWrapper",
})({
	display: "flex",
	alignItems: "center",
	gap: "0.5rem",
	flex: "1",
})

export const ListType3ItemWrapper = styled(ListItem, {
	name: "ListType3ItemWrapper",
})({
	padding: 0,
})

export const ListType3ItemImageWrapper = styled(Box, {
	name: "ListType3ItemImageWrapper",
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
