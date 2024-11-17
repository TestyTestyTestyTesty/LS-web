"use client"
import { Container } from "@components"
import { Typography, useMediaQuery, useTheme } from "@mui/material"
import { breakpointsEnum } from "@lib"
import Image from "next/image"
import { useId } from "react"
import { LogosIconsWrapper, LogosIconWrapper, LogosWrapper } from "./Logos.styles"
import type { LogosInterface } from "./Logos.types"

export const Logos = ({ title, icons }: LogosInterface) => {
	const theme = useTheme()
	const isTablet = useMediaQuery(theme.breakpoints.down(breakpointsEnum.LG))
	const isMobile = useMediaQuery(theme.breakpoints.down(breakpointsEnum.MD))
	return (
		<Container>
			<LogosWrapper>
				<Typography
					variant={isMobile ? "p1Mobile" : "h6"}
					color={theme.palette.lsNavy.n800}
					align="center"
				>
					{title}
				</Typography>
				<LogosIconsWrapper>
					{icons.map((icon) => (
						<LogosIconWrapper key={useId()}>
							<Image
								src={icon.url}
								width={isTablet ? 64 : 100}
								height={isTablet ? 40 : 60}
								alt={icon.alt}
								style={{ objectFit: "contain" }}
								quality="100"
							/>
						</LogosIconWrapper>
					))}
				</LogosIconsWrapper>
			</LogosWrapper>
		</Container>
	)
}
