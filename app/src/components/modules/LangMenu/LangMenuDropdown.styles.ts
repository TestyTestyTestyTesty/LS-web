import { styled } from "@mui/material/styles"
import { Box, Menu, MenuItem } from "@mui/material"
import CheckIcon from "@mui/icons-material/Check"

export const LangMenuContainer = styled(Box, {
	shouldForwardProp: (prop) => prop !== "disabled",
})<{ disabled: boolean }>(({ disabled }) => ({
	display: "flex",
	alignItems: "center",
	textAlign: "center",
	cursor: disabled ? "default" : "pointer",
}))

export const LangMenuButton = styled(Box)({
	display: "flex",
	alignItems: "center",
	gap: 0.5,
})

export const StyledMenu = styled(Menu)(({ theme }) => ({
	"& .MuiPaper-root": {
		overflow: "visible",
		marginTop: theme.spacing(1.5),
		width: "100%",
		maxWidth: 180,
		border: `1px solid ${theme.palette.lsGrey.g400}`,
		borderRadius: 0,
		boxShadow: "none",
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

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
	display: "flex",
	alignItems: "flex-start",
	gap: theme.spacing(1),
	"&.Mui-selected": {
		backgroundColor: "transparent",
	},
	"&.MuiMenuItem-root:hover": {
		backgroundColor: "transparent",
	},
	"&.Mui-selected:hover": {
		backgroundColor: "transparent",
	},
}))

export const StyledCheckIcon = styled(CheckIcon, {
	shouldForwardProp: (prop) => prop !== "selected",
})<{ selected: boolean }>(({ theme, selected }) => ({
	color: selected ? theme.palette.lsNavy.n800 : theme.palette.defaultColors.white,
}))
