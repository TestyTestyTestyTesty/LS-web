import type { ListType1ListItemProps } from "@components/atoms/ListType1Item/ListType1Item.types"
import type { ListType2ListItemProps } from "@components/atoms/ListType2Item/ListType2Item.types"
import type { Link } from "@types"
import type { MegaMenuBottomSectionProps } from "./BottomSection/MegaMenuBottomSection.types"
import type { highlightSectionProps } from "./HighlightSection/MegaMenuHighlightSection.types"

export interface MegaMenuProps {
	title?: string
	highlightSection: highlightSectionProps
	lightAccent: string
	darkAccent: string
	lists: {
		title: string
		items: ListType1ListItemProps[]
		link?: Link
	}[]
	listBigIcons?: ListType2ListItemProps[]
	bottomSection?: MegaMenuBottomSectionProps
}
