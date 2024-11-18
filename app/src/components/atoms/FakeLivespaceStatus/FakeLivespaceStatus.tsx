"use client"
import EastIcon from "@mui/icons-material/East"
import { Typography, useTheme } from "@mui/material"
import { StatusDot } from "@svg/ReactComponents/StatusDot"
import { FakeLivespaceStatusLink } from "./FakeLivespaceStatus.styles"
import type { FakeLivespaceStatusProps } from "./FakeLivespaceStatus.types"
import { useState } from "react"

export const FakeLivespaceStatus = ({ color, status }: FakeLivespaceStatusProps) => {
	const theme = useTheme()
	const [isHovered, setIsHovered] = useState(false)
	return (
		<FakeLivespaceStatusLink
			href="https://status.livespace.io/"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<StatusDot />
			<Typography variant="navBtn" color={isHovered ? theme.palette.lsPrimary.p400 : color}>
				{status}
			</Typography>
			<EastIcon sx={{ color: isHovered ? theme.palette.lsPrimary.p400 : color }} />
		</FakeLivespaceStatusLink>
	)
}
