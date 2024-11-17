"use client"
import { Box } from "@mui/material"
import { useId } from "react"
import type { ListType2Props } from "./ListType2.types"

import { ListType2Item } from "@components"
import { ListType2List } from "./ListType2.styles"

export const ListType2 = ({
	lightAccent = "#fff",
	darkAccent = "#000",
	listItems,
}: ListType2Props) => {
	return (
		<Box>
			{listItems && (
				<ListType2List>
					{listItems.map((listItem) => (
						<ListType2Item
							key={useId()}
							lightAccent={lightAccent}
							darkAccent={darkAccent}
							listItem={listItem}
						/>
					))}
				</ListType2List>
			)}
		</Box>
	)
}
