import React from "react"
import { StripedLineWrapper, StripedLineItem } from "./StripedLine.styles"

export const StripedLine = ({ lines }: { lines: number }) => {
	return (
		<StripedLineWrapper>
			<StripedLineItem length="short" />
			{lines > 1
				? [...Array(lines - 1)].map((_, index) => <StripedLineItem key={index} length="long" />)
				: null}
			<StripedLineItem length="long" />
			<StripedLineItem length="short" />
		</StripedLineWrapper>
	)
}
