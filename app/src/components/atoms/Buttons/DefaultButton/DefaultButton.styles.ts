import type { Theme } from "@mui/material"
import { Button, styled } from "@mui/material"
import type { ButtonSizes, ButtonStates, ButtonVariants } from "./DefaultButton.types"
import { breakpointsEnum } from "@lib"

const getBackgroundColor = (variant: ButtonVariants, theme: Theme, state: ButtonStates) => {
	if (state === "default") {
		if (variant === "containedInverse") return theme.palette.defaultColors.white

		if (variant === "contained") return theme.palette.lsPrimary.p400

		return "transparent"
	}

	if (state === "hover") {
		if (variant === "containedInverse") return theme.palette.lsGrey.g300

		if (variant === "contained") return theme.palette.lsPrimary.p300

		if (variant === "text" || variant === "outlined") return theme.palette.lsGrey.g100

		return "transparent"
	}

	if (state === "active") {
		if (variant === "containedInverse") return theme.palette.lsGrey.g500

		if (variant === "text" || variant === "outlined") return "transparent"

		return theme.palette.lsPrimary.p300
	}

	if (state === "disabled") {
		if (variant === "containedInverse") return theme.palette.lsNavy.n600

		if (variant === "text" || variant === "outlined") return "transparent"

		return theme.palette.lsPrimary.p100
	}

	return "transparent"
}

const getPadding = (size: ButtonSizes, theme: Theme) => {
	if (size === "large") {
		if (theme.breakpoints.down(breakpointsEnum.MD)) return "0.6875rem 2.5rem"

		return "0.6875rem 1.5rem"
	}

	return "0.6875rem 1.5rem"
}
const getBorder = (variant: ButtonVariants, theme: Theme, state: ButtonStates) => {
	if (variant !== "outlined") return "none"

	return `1px solid ${getBorderColor(variant, theme, state)}`
}

const getBorderRadius = (variant: ButtonVariants, theme: Theme) => {
	return variant === "text" ? "0" : theme.shape.borderRadius
}

const getBorderColor = (variant: ButtonVariants, theme: Theme, state: ButtonStates) => {
	if (variant !== "outlined") return "none"

	if (state === "default" || state === "hover") {
		return theme.palette.lsSecondary.c500
	}

	if (state === "active") {
		return theme.palette.lsSecondary.c400
	}

	if (state === "disabled") {
		return theme.palette.lsSecondary.c200
	}

	return "none"
}

const getColor = (variant: ButtonVariants, theme: Theme, state: ButtonStates) => {
	if (state === "default") {
		return theme.palette.lsNavy.n800
	}

	if (state === "hover") {
		if (variant === "containedInverse") return theme.palette.lsPrimary.p800

		return theme.palette.lsNavy.n800
	}

	if (state === "active") {
		if (variant === "contained" || variant === "containedInverse")
			return theme.palette.defaultColors.white

		return theme.palette.lsSecondary.c400
	}

	if (state === "disabled") {
		if (variant === "containedInverse") return theme.palette.lsNavy.n800

		if (variant === "contained") return theme.palette.defaultColors.white

		return theme.palette.lsSecondary.c200
	}

	return theme.palette.lsNavy.n800
}

export const StyledButton = styled(Button, {
	shouldForwardProp: (prop) => prop !== "variant" && prop !== "isFullWidth" && prop !== "size",
})<{ variant: ButtonVariants; isFullWidth: boolean; size: ButtonSizes }>(
	({ theme, variant, isFullWidth, size }) => ({
		padding: getPadding(size, theme),
		backgroundColor: getBackgroundColor(variant, theme, "default"),
		borderRadius: getBorderRadius(variant, theme),
		border: getBorder(variant, theme, "default"),
		color: getColor(variant, theme, "default"),
		width: isFullWidth ? "100%" : "auto",
		"&:hover": {
			backgroundColor: getBackgroundColor(variant, theme, "hover"),
			color: getColor(variant, theme, "hover"),
			border: getBorder(variant, theme, "hover"),
		},
		"&:active": {
			backgroundColor: getBackgroundColor(variant, theme, "active"),
			color: getColor(variant, theme, "active"),
			border: getBorder(variant, theme, "active"),
		},
		"&:disabled": {
			backgroundColor: getBackgroundColor(variant, theme, "disabled"),
			color: getColor(variant, theme, "disabled"),
			border: getBorder(variant, theme, "disabled"),
		},
	}),
)
