"use client"
import { DummyArrowLink } from "@components"
import LogoLarge from "@mocks/assets/logo-large.svg?url"
import { Typography, useMediaQuery, useTheme } from "@mui/material"
import { breakpointsEnum } from "@lib"
import { PlayIcon } from "@svg/ReactComponents/PlayIcon"
import Image from "next/image"

import { useState } from "react"
import {
	VideoPlayButtonContent,
	VideoPlayButtonContentBottom,
	VideoPlayButtonContentTop,
	VideoPlayButtonWrapper,
} from "./VideoPlayButton.styles"
import type { VideoPlayButtonProps } from "./VideoPlayButton.types"
import { VideoPlayerModal } from "@components/atoms/VideoPlayerModal/VideoPlayerModal"

export const VideoPlayButton = ({
	topLineText,
	duration,
	linkText,
	showLogo,
	mediaId,
}: VideoPlayButtonProps) => {
	const theme = useTheme()
	const [isHovered, setIsHovered] = useState(false)
	const isMobile = useMediaQuery(theme.breakpoints.down(breakpointsEnum.LG))
	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)
	return (
		<>
			<VideoPlayButtonWrapper
				onClick={handleOpen}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<PlayIcon isHovered={isHovered} />
				<VideoPlayButtonContent>
					<VideoPlayButtonContentTop>
						<Typography variant={isMobile ? "p1Mobile" : "caption1"} fontWeight={700}>
							{topLineText}
						</Typography>

						{showLogo && (
							<Image
								src={LogoLarge}
								alt="logo"
								width={79}
								height={22}
								style={{ objectFit: "contain" }}
							/>
						)}
					</VideoPlayButtonContentTop>
					<VideoPlayButtonContentBottom>
						<Typography
							variant={isMobile ? "navCaption" : "caption2"}
							color={theme.palette.lsGrey.g1000}
						>
							{duration}
						</Typography>
						<DummyArrowLink
							title={linkText}
							color={theme.palette.lsPrimary.p900}
							typographyVariant={isMobile ? "linkArrow" : "caption1"}
							showArrow={!isMobile}
						/>
					</VideoPlayButtonContentBottom>
				</VideoPlayButtonContent>
			</VideoPlayButtonWrapper>
			<VideoPlayerModal mediaId={mediaId} open={open} handleClose={handleClose} />
		</>
	)
}
