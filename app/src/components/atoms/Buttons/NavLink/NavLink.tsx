"use client"
import { useMediaQuery, useTheme } from "@mui/material"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import type { NavLinkProps } from "./NavLink.types"
import { breakpointsEnum } from "@lib"

export const NavLink = ({ label, disabled = false, href }: NavLinkProps) => {
	const {
		palette: {
			defaultColors: { lightBlue },
			lsSecondary: { c400, c200 },
			lsNavy: { n800 },
		},
		breakpoints,
	} = useTheme()

	const isMobile = useMediaQuery(breakpoints.down(breakpointsEnum.MD))

	return (
		<Button
			variant="text"
			size="medium"
			disabled={disabled}
			href={href}
			disableRipple
			sx={{
				p: "0.75rem 0.5rem 0.625rem",
				backgroundColor: "transparent",
				borderRadius: "0.1875rem",
				borderColor: "none",
				color: n800,
				textTransform: "none",
				"&:hover": {
					textDecoration: "underline",
					textDecorationColor: n800,
					textUnderlineOffset: "0.25rem",
				},
				"&:focus": {
					border: isMobile ? `1px solid ${lightBlue}` : "none",
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
		</Button>
	)
}
