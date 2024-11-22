import { styled } from "@mui/material/styles"
import { Box, Menu, MenuItem, Typography } from "@mui/material"
import CheckIcon from "@mui/icons-material/Check"

export const LangMenuContainer = styled(Box, {
	name: "LangMenuContainer",
	shouldForwardProp: (prop) => prop !== "disabled",
})<{ disabled: boolean }>(({ disabled }) => ({
	display: "flex",
	alignItems: "center",
	textAlign: "center",
	cursor: disabled ? "default" : "pointer",
}))

export const LangMenuButton = styled(Box, {
	name: "LangMenuButton",
})({
	display: "flex",
	alignItems: "center",
	gap: 0.5,
})

export const StyledMenu = styled(Menu, {
	name: "StyledMenu",
})(({ theme }) => ({
	"& .MuiPaper-root": {
		overflow: "visible",
		marginTop: theme.spacing(1.5),
		width: "100%",
		maxWidth: 180,
		border: `1px solid ${theme.palette.lsGrey.g400}`,
		borderRadius: "0.25rem",
		boxShadow: "0px 8px 24px rgba(36, 41, 59, 0.20)",
		color: theme.palette.mode === "light" ? "rgb(55, 65, 81)" : theme.palette.lsGrey.g300,
		"& .MuiMenu-list": {
			padding: "0.25rem 0",
		},
		"&::before": {
			content: "''",
			display: "block",
			position: "absolute",
			top: 0,
			left: "50%",
			transform: "translateX(-50%) translateY(-50%) rotate(45deg)",
			width: 10,
			height: 10,
			backgroundColor: theme.palette.background.paper,
			borderLeft: `1px solid ${theme.palette.lsGrey.g400}`,
			borderTop: `1px solid ${theme.palette.lsGrey.g400}`,
		},
	},
}))

export const StyledMenuItem = styled(MenuItem, {
	name: "StyledMenuItem",
})(({ theme }) => ({
	display: "flex",
	alignItems: "flex-start",
	gap: theme.spacing(1),
	padding: "1rem",
	"&.Mui-selected": {
		backgroundColor: "transparent",
		color: theme.palette.lsSecondary.c400,
	},
	"&.Mui-selected:hover": {
		backgroundColor: "transparent",
	},
	"&:hover": {
		background: theme.palette.lsGrey.g100,
	},
}))

export const StyledMenuTypography = styled(Typography, {
	name: "StyledMenuTypography",
	shouldForwardProp: (prop) => prop !== "isSelected",
})<{ isSelected: boolean }>(({ theme, isSelected }) => ({
	color: isSelected ? theme.palette.lsSecondary.c400 : theme.palette.lsNavy.n800,
	position: "relative",
	left: "1.875rem",
}))

export const StyledCheckIcon = styled(CheckIcon, { name: "StyledCheckIcon" })(({ theme }) => ({
	color: theme.palette.lsSecondary.c400,
	position: "absolute",
}))
