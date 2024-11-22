"use client"

import { HamburgerBox, HamburgerInner, HamburgerWrapper } from "./Hamburger.styles"
import type { HamburgerProps } from "./Hamburger.types"

export const Hamburger = ({ onClick, isOpened }: HamburgerProps) => {
	const handleClick = () => {
		onClick && onClick()
	}

	return (
		<>
			<HamburgerWrapper onClick={handleClick}>
				<HamburgerBox>
					<HamburgerInner isActive={isOpened} />
				</HamburgerBox>
			</HamburgerWrapper>
		</>
	)
}
