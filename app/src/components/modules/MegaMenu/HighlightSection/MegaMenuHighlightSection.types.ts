import type { ArrowLinkProps } from "@components/atoms/Buttons/ArrowLink/ArrowLink.types"

export interface highlightSectionProps {
	tagText?: string
	tagColor?: string
	title?: string
	subtitle?: string
	imageUrl?: string
	link: ArrowLinkProps
}
export interface MegaMenuHighlightSectionProps {
	highlightSection: highlightSectionProps
	lightAccent: string
	darkAccent?: string
}
