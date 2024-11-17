import type { ArrowLinkProps } from "@components/atoms/Buttons/ArrowLink/ArrowLink.types"
import type { ListType1ListItemProps } from "@components/atoms/ListType1Item/ListType1Item.types"

export interface ListType1Props {
	lightAccent?: string
	darkAccent?: string
	listTitle: string
	listItems: ListType1ListItemProps[]
	link?: ArrowLinkProps
}
