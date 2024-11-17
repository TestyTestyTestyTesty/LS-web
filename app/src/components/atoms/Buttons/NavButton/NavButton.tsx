"use client"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import Typography from "@mui/material/Typography"
import { useState, useEffect, useRef } from "react"
import type { NavButtonProps } from "./NavButton.types"
import { Button, useTheme } from "@mui/material"
import { breakpointsEnum } from "@lib"

export const NavButton = ({ label, disabled = false, onClick }: NavButtonProps) => {
	const [isRotated, setIsRotated] = useState(false)
	const buttonRef = useRef<HTMLButtonElement>(null)

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
		function handleClickOutside(mouseEvent: MouseEvent) {
			if (buttonRef.current && !buttonRef.current.contains(mouseEvent.target as HTMLElement)) {
				setIsRotated(false)
			}
		}

		document.addEventListener("mousedown", handleClickOutside)
		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [])

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
					textDecoration: "underline",
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
					textDecoration: "underline",
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
