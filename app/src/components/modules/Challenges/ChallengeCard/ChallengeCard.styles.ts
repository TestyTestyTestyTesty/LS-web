import { Box, styled } from "@mui/material"
import { motion } from "framer-motion"

export const MotionBox = styled(motion.div)({})

export const ChallengeHeaderContainer = styled(Box, {
	name: "ChallengeHeaderContainer",
})({
	display: "flex",
	flexDirection: "column",
	gap: "1rem",
	maxWidth: 588,
})
