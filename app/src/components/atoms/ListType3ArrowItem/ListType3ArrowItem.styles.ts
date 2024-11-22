import EastIcon from "@mui/icons-material/East"
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

export const ListType3ArrowItemIcon = styled(EastIcon, {
	name: "ListType3ArrowItemIcon",
	shouldForwardProp: (prop) =>
		prop !== "isHovered" && prop !== "hoverColor" && prop !== "customColor",
})<{ isHovered: boolean; customColor?: string; hoverColor?: string }>(
	({ theme, hoverColor, customColor, isHovered }) => ({
		transition: "color,left 0.3s",
		position: "relative",
		color: isHovered
			? hoverColor
				? hoverColor
				: theme.palette.lsPrimary.p800
			: customColor
				? customColor
				: theme.palette.lsPrimary.p900,
		left: isHovered ? "0.25rem" : "0",
	}),
)
