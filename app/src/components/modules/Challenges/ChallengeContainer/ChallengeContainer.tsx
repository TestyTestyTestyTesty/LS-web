import { forwardRef } from "react"
import { Box } from "@mui/material"
import { useBreakpoints } from "@lib"
import type { ReactNode } from "react"

export const ChallengeContainer = forwardRef<HTMLDivElement, { children: ReactNode }>(
	({ children }, ref) => {
		const { isTablet } = useBreakpoints()

		return (
			<Box
				ref={ref}
				sx={{
					display: "flex",
					gap: "1rem",
					padding: "2rem",
					flexDirection: isTablet ? "column" : "row",
				}}
			>
				{children}
			</Box>
		)
	},
)

ChallengeContainer.displayName = "ChallengeContainer"
