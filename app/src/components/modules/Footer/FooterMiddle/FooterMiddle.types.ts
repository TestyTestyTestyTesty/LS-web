import type { HighlightedItemProps } from "@components/atoms/HighlightedItem/HighlightIedtem.types"
import type { ListType3Props } from "@components/modules/Lists/ListType3/ListType3.types"

export interface FooterMiddleProps {
	status: string
	lists: ListType3Props[]
	highlightedContent: FooterMiddleHighlightedContentProps
}

export interface FooterMiddleHighlightedContentProps {
	title: string
	links: HighlightedItemProps[]
}
