"use client"

import EastIcon from "@mui/icons-material/East"
import { useTheme } from "@mui/material"
import Link from "next/link"
import { ArrowLinkLink, ArrowLinkTypography, ArrowLinkWrapper } from "./ArrowLink.styles"
import type { ArrowLinkProps } from "./ArrowLink.types"

export const ArrowLink = ({ title, typographyVariant, href, color = "#000" }: ArrowLinkProps) => {
	const theme = useTheme()

	return (
		<Link href={href} passHref legacyBehavior>
			<ArrowLinkLink color={color} underline="none">
				<ArrowLinkWrapper>
					<ArrowLinkTypography variant={typographyVariant ? typographyVariant : "linkArrow"}>
						{title}
					</ArrowLinkTypography>
					<EastIcon sx={{ color: color ? color : theme.palette.lsPrimary.p900 }} />
				</ArrowLinkWrapper>
			</ArrowLinkLink>
		</Link>
	)
}
