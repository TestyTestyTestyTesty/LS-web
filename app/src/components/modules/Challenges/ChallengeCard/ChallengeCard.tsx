import { useBreakpoints } from "@lib"
import { Box, Typography } from "@mui/material"
import { useAnimation } from "framer-motion"
import Image from "next/image"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { ChallengeContainer } from "../ChallengeContainer/ChallengeContainer"
import { ChallengeHeaderContainer, MotionBox } from "./ChallengeCard.styles"
import type { ChallengeCardProps } from "./ChallengeCard.types"

export const ChallengeCard = ({
	icon,
	heading,
	subheading,
	description,
	image,
}: ChallengeCardProps) => {
	const { isTablet } = useBreakpoints()

	const { ref, inView } = useInView({
		threshold: 0.8,
		triggerOnce: false,
	})

	const controls = useAnimation()

	useEffect(() => {
		if (inView) {
			controls.start("visible")
		}
	}, [controls, inView])

	const imageVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: "easeOut" },
		},
	}

	return (
		<ChallengeContainer ref={ref}>
			<ChallengeHeaderContainer>
				<Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
					<Image src={icon.url} alt={icon.alt} width={40} height={40} />
					<Typography variant={isTablet ? "p1Mobile" : "h6"}>{heading.toUpperCase()}</Typography>
				</Box>
				<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
					<Typography variant={isTablet ? "h3Mobile" : "h3"}>{subheading}</Typography>
					<Typography variant={isTablet ? "p1Mobile" : "p1"} sx={{ maxWidth: "34rem" }}>
						{description}
					</Typography>
				</Box>
			</ChallengeHeaderContainer>
			<MotionBox
				initial="hidden"
				animate={controls}
				variants={imageVariants}
				sx={{ maxWidth: "35.375rem", maxHeight: "31.25rem", overflow: "hidden" }}
			>
				<Image src={image.url} alt={image.alt} width={566} height={500} layout="responsive" />
			</MotionBox>
		</ChallengeContainer>
	)
}
