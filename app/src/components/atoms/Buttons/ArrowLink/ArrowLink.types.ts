import type { TypographyTypeMap } from "@mui/material"

export type ArrowLinkProps = {
	title: string
	href: string
	typographyVariant?: TypographyTypeMap["props"]["variant"]
	color?: string
	hoverColor?: string
}
