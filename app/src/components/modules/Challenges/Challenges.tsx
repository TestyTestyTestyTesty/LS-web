import { Container, ContentHeaderWrapper } from "@components"
import { useBreakpoints } from "@lib"
import { Typography } from "@mui/material"
import { Theme as theme } from "@styles"
import { ChallengeCard } from "./ChallengeCard/ChallengeCard"
import {
	ChallengesContainer,
	ChallengesInsideWrapper,
	ChallengesWrapper,
} from "./Challenges.styles"
import type { ChallengesProps } from "./Challenges.types"

export const Challenges = ({ heading, subheading, challenges }: ChallengesProps) => {
	const isTablet = useBreakpoints()

	return (
		<ChallengesWrapper>
			<Container>
				<ChallengesInsideWrapper>
					<ContentHeaderWrapper sideLineColor={theme.palette.lsGrey.g200}>
						<Typography
							variant={isTablet ? "h6" : "h6Mobile"}
							component="p"
							sx={{ paddingBottom: "1rem" }}
						>
							{heading.toUpperCase()}
						</Typography>

						<Typography
							variant={isTablet ? "h2" : "h2Mobile"}
							component="h2"
							sx={{ maxWidth: "36rem" }}
						>
							{subheading}
						</Typography>
					</ContentHeaderWrapper>

					<ChallengesContainer>
						{challenges.map((challenge) => (
							<ChallengeCard
								key={challenge.id}
								icon={challenge.icon}
								image={challenge.image}
								heading={challenge.heading}
								subheading={challenge.subheading}
								description={challenge.description}
							/>
						))}
					</ChallengesContainer>
				</ChallengesInsideWrapper>
			</Container>
		</ChallengesWrapper>
	)
}
