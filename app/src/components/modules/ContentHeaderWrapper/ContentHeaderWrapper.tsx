import React from "react"

import { ContentLine, SideLine } from "@components"
import { ContentHeaderWrapperStyled } from "./ContentHeaderWrapper.styles"

export const ContentHeaderWrapper = ({
	sideLineColor,
	children,
}: {
	sideLineColor?: string
	children: React.ReactNode
}) => {
	return (
		<>
			<SideLine color={sideLineColor} />
			<ContentHeaderWrapperStyled>
				<ContentLine />
				{children}
			</ContentHeaderWrapperStyled>
		</>
	)
}
