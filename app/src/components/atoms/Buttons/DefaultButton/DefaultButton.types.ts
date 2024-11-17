export type DefaultButtonProps = {
	label: string
	variant: ButtonVariants
	size?: ButtonSizes
	disabled?: boolean
	onClick?: () => void
	href?: string
	isFullWidth?: boolean
}

export type ButtonVariants = "contained" | "outlined" | "text" | "containedInverse"
export type ButtonSizes = "small" | "large"
export type ButtonStates = "default" | "hover" | "active" | "disabled"
