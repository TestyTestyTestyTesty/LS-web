"use client"
import { breakpointsEnum } from "@lib"
import { useClickOutside } from "@lib/useClickOutsideChecker"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import { Button, useTheme } from "@mui/material"
import Typography from "@mui/material/Typography"
import { useEffect, useState } from "react"
import type { NavButtonProps } from "./NavButton.types"

export const NavButton = ({
	label,
	disabled = false,
	onClick,
	showHoverStyles = true,
}: NavButtonProps) => {
	const [isRotated, setIsRotated] = useState(false)
	const { ref: buttonRef, isClickedOutside } = useClickOutside<HTMLButtonElement>()

	const {
		palette: {
			defaultColors: { lightBlue },
			lsSecondary: { c400, c200 },
			lsNavy: { n800 },
		},
		breakpoints,
	} = useTheme()

	const handleClick = () => {
		setIsRotated(!isRotated)
		onClick && onClick()
	}

	useEffect(() => {
		isClickedOutside && setIsRotated(false)
	}, [isClickedOutside])

	return (
		<Button
			ref={buttonRef}
			variant="text"
			size="medium"
			disabled={disabled}
			onClick={handleClick}
			disableRipple
			sx={{
				p: "0.75rem 0.5rem 0.625rem",
				backgroundColor: "transparent",
				borderRadius: "0.1875rem",
				color: n800,
				textTransform: "none",
				"&:hover": {
					textDecoration: showHoverStyles ? "underline" : "none",
					textDecorationColor: n800,
					textUnderlineOffset: "0.25rem",
				},
				[breakpoints.down(breakpointsEnum.MD)]: {
					"&:focus": {
						border: `1px solid ${lightBlue}`,
					},
				},
				[breakpoints.up(breakpointsEnum.MD)]: {
					"&:focus": {
						border: "none",
					},
				},
				"&:active": {
					color: c400,
					textDecoration: showHoverStyles ? "underline" : "none",
					textUnderlineOffset: "0.25rem",
					textDecorationColor: n800,
				},
				"&:disabled": {
					color: c200,
				},
			}}
		>
			<Typography variant="navBtn">{label}</Typography>
			<KeyboardArrowDownIcon
				sx={{
					transition: "transform 0.3s ease",
					transform: isRotated ? "rotate(180deg)" : "rotate(0deg)",
				}}
			/>
		</Button>
	)
}
