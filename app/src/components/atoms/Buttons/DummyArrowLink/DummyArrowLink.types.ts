import type { TypographyTypeMap } from "@mui/material"

export type DummyLinkProps = {
	title: string
	typographyVariant?: TypographyTypeMap["props"]["variant"]
	color?: string
	showText?: boolean
	showArrow?: boolean
}
