import CheckIcon from "@mui/icons-material/Check"
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	List,
	ListItem,
	MenuItem,
} from "@mui/material"
import { styled } from "@mui/material/styles"

export const LangMenuContainer = styled(Box, {
	shouldForwardProp: (prop) => prop !== "disabled",
})<{ disabled: boolean }>(({ disabled }) => ({
	display: "flex",
	alignItems: "center",
	textAlign: "center",
	cursor: disabled ? "default" : "pointer",
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

export const LangMenuAccordion = styled(Accordion, {
	name: "LangMenuAccordion",
})(({ theme }) => ({
	borderTop: `1px solid ${theme.palette.lsGrey.g400}`,
	padding: "0.5rem 0",
}))

export const LangMenuAccordionSummaryWrapper = styled(Box, {
	name: "LangMenuAccordionSummaryWrapper",
})({
	display: "flex",
	alignItems: "center",
	gap: "0.5rem",
})

export const LangMenuAccordionSummary = styled(AccordionSummary, {
	name: "LangMenuAccordionSummary",
})({
	gap: "1rem",
	padding: "1rem 0",
	".MuiAccordionSummary-content": { margin: 0 },
})

export const LangMenuAccordionDetails = styled(AccordionDetails, {
	name: "LangMenuAccordionDetails",
})({
	padding: 0,
})

export const LangMenuList = styled(List, {
	name: "LangMenuList",
})({
	padding: 0,
})

export const LangMenuListItem = styled(ListItem, {
	name: "LangMenuListItem",
})({
	padding: "1rem 0 1rem 1.8rem",
})

export const StyledCheckIcon = styled(CheckIcon, {
	shouldForwardProp: (prop) => prop !== "selected",
})<{ selected: boolean }>(({ theme, selected }) => ({
	color: selected ? theme.palette.lsNavy.n800 : theme.palette.defaultColors.white,
}))
