"use client"

import { ArrowLink, ListType1Item } from "@components"
import { useId } from "react"
import { ListType1Header, ListType1List, ListType1Wrapper } from "./ListType1.styles"
import type { ListType1Props } from "./ListType1.types"

export const ListType1 = ({
	lightAccent = "#fff",
	darkAccent = "#000",
	listItems,
	listTitle,
	link,
}: ListType1Props) => {
	return (
		<ListType1Wrapper>
			<ListType1Header variant="menuHeading">{listTitle}</ListType1Header>
			{listItems && (
				<ListType1List>
					{listItems.map((listItem) => (
						<ListType1Item
							key={useId()}
							lightAccent={lightAccent}
							darkAccent={darkAccent}
							listItem={listItem}
						/>
					))}
				</ListType1List>
			)}
			{link && <ArrowLink title={link.title} href={link.href} color={darkAccent} />}
		</ListType1Wrapper>
	)
}
