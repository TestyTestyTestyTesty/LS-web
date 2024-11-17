"use client"
import CloseIcon from "@mui/icons-material/Close"
import MenuIcon from "@mui/icons-material/Menu"
import { useTheme } from "@mui/material"

import { HamburgerWrapper } from "./Hamburger.styles"
import type { HamburgerProps } from "./Hamburger.types"

export const Hamburger = ({ onClick, isOpened }: HamburgerProps) => {
	const {
		palette: {
			lsNavy: { n800 },
		},
	} = useTheme()

	const handleClick = () => {
		onClick && onClick()
	}

	return (
		<HamburgerWrapper onClick={handleClick}>
			{isOpened ? (
				<CloseIcon sx={{ color: n800, fontSize: "2.75rem", fontWeight: 200 }} />
			) : (
				<MenuIcon sx={{ color: n800, fontSize: "2.75rem" }} />
			)}
		</HamburgerWrapper>
	)
}
