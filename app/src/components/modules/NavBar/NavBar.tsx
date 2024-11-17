"use client"
import { useBreakpoints } from "@lib"
import React from "react"
import { NavBarMobile } from "./NavBarMobile/NavBarMobile"
import { NavBarDesktop } from "./NavBarDesktop/NavBarDesktop"
import type { NavBarProps } from "./NavBar.types"

export const NavBar = ({ links, buttons }: NavBarProps) => {
	const { isTabletWide } = useBreakpoints()
	return (
		<>
			{isTabletWide ? (
				<NavBarMobile links={links} buttons={buttons} />
			) : (
				<NavBarDesktop links={links} buttons={buttons} />
			)}
		</>
	)
}
