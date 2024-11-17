"use client"
import EastIcon from "@mui/icons-material/East"
import { DummyArrowLinkTypography, DummyArrowLinkWrapper } from "./DummyArrowLink.styles"
import type { DummyLinkProps } from "./DummyArrowLink.types"

export const DummyArrowLink = ({
	title,
	typographyVariant,
	color = "#000",
	showText = true,
	showArrow = true,
}: DummyLinkProps) => {
	return (
		<DummyArrowLinkWrapper>
			{showText && (
				<DummyArrowLinkTypography
					variant={typographyVariant ? typographyVariant : "linkArrow"}
					color={color}
				>
					{title}
				</DummyArrowLinkTypography>
			)}
			{showArrow ? <EastIcon sx={{ color: color }} /> : null}
		</DummyArrowLinkWrapper>
	)
}
