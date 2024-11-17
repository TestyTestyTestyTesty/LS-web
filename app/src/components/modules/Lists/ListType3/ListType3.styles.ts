import { Box, List, styled, Typography } from "@mui/material"

export const ListType3Wrapper = styled(Box, {
	name: "ListType3Wrapper",
})({
	display: "flex",
	flexDirection: "column",
	gap: "0.5rem",
})

export const ListType3List = styled(List, {
	name: "ListType3List",
})({
	padding: 0,
	display: "flex",
	flexDirection: "column",
	gap: "1rem",
})

export const ListType3Title = styled(Typography, {
	name: "ListType3Title",
	shouldForwardProp: (prop) => prop !== "isHovered",
})<{ isHovered: boolean }>(({ isHovered, theme }) => ({
	color: isHovered ? theme.palette.lsPrimary.p400 : theme.palette.defaultColors.black,
}))

export const ListType3TitleWrapper = styled(Box, {
	name: "ListType3TitleWrapper",
})({
	display: "flex",
	alignItems: "center",
	gap: "0.5rem",
	padding: "1rem 0",
})
