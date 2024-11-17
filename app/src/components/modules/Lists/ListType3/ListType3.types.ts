import type { listType3ItemProps } from "@components/atoms/ListType3Item/ListType3Item.types"

export interface ListType3Props {
	title: {
		text: string
		href?: string
	}
	items: listType3ItemProps[]
}
