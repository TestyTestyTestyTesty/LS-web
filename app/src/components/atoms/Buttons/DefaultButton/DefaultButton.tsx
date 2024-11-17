"use client"

import Typography from "@mui/material/Typography"
import { StyledButton } from "./DefaultButton.styles"
import type { ButtonSizes, ButtonVariants, DefaultButtonProps } from "./DefaultButton.types"
import { useBreakpoints } from "@lib"
const getButtonTypographyVariant = (
	size: ButtonSizes,
	variant: ButtonVariants,
	isMobile: boolean,
) => {
	if (size === "small") return "defaultSmallBtn"

	if (variant === "text") return isMobile ? "h6Mobile" : "h6"

	return isMobile ? "defaultSmallBtn" : "defaultBtn"
}
export const DefaultButton = ({
	label,
	variant,
	disabled = false,
	onClick,
	href,
	size = "large",
	isFullWidth = false,
}: DefaultButtonProps) => {
	const { isTabletWide } = useBreakpoints()
	const typographyVariant = getButtonTypographyVariant(size, variant, isTabletWide)
	return (
		<StyledButton
			variant={variant}
			disabled={disabled}
			onClick={onClick}
			href={href}
			disableRipple
			isFullWidth={isFullWidth}
			size={size}
		>
			<Typography variant={typographyVariant}>{label}</Typography>
		</StyledButton>
	)
}
