import { Box, styled, Typography } from "@mui/material"

export const ListType3ArrowItemTitle = styled(Typography, {
	name: "ListType3ArrowItemTitle",
	shouldForwardProp: (prop) => prop !== "isHovered",
})<{ isHovered: boolean }>(({ isHovered, theme }) => ({
	color: isHovered ? theme.palette.lsPrimary.p400 : theme.palette.defaultColors.black,
}))

export const ListType3ArrowItemTitleWrapper = styled(Box, {
	name: "ListType3ArrowItemTitleWrapper",
})({
	display: "flex",
	alignItems: "center",
	gap: "0.5rem",
})
