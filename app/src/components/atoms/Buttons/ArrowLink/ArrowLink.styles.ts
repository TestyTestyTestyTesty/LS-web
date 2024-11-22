import { Box, Link, styled, Typography } from "@mui/material"
import EastIcon from "@mui/icons-material/East"
export const ArrowLinkWrapper = styled(Box, {
	name: "ArrowLinkWrapper",
})({
	display: "flex",
	gap: "0.25rem",
	alignItems: "center",
})

export const ArrowLinkTypography = styled(Typography, {
	name: "ArrowLinkTypography",
	shouldForwardProp: (prop) =>
		prop !== "isHovered" && prop !== "customColor" && prop !== "hoverColor",
})<{ isHovered: boolean; customColor?: string; hoverColor?: string }>(
	({ theme, customColor, hoverColor, isHovered }) => ({
		display: "flex",
		marginRight: "0.25rem",
		textDecoration: "none",
		transition: "color 0.3s",
		color: isHovered
			? hoverColor
				? hoverColor
				: theme.palette.lsPrimary.p800
			: customColor
				? customColor
				: theme.palette.defaultColors.black,
	}),
)

export const ArrowLinkIcon = styled(EastIcon, {
	name: "ArrowLinkIcon",
	shouldForwardProp: (prop) =>
		prop !== "isHovered" && prop !== "customColor" && prop !== "hoverColor",
})<{ isHovered: boolean; customColor?: string; hoverColor?: string }>(
	({ theme, customColor, hoverColor, isHovered }) => ({
		transition: "color 0.3s, left 0.3s",
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

export const ArrowLinkLink = styled(Link, {
	name: "ArrowLinkLink",
	shouldForwardProp: (prop) => prop !== "color",
})<{ color: string }>(({ color, theme }) => ({
	color: color ? color : theme.palette.lsPrimary.p900,
}))
