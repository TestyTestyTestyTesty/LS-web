import { Container, DefaultButton, SideLine } from "@components"
import { useBreakpoints } from "@lib"
import { Box, Typography, useTheme } from "@mui/material"
import { useId } from "react"
import {
	ScrollContentList,
	ScrollContentLists,
	ScrollSectionBottom,
	ScrollSectionContent,
	ScrollSectionTop,
} from "./ScrollSection.styles"
import type { ScrollSectionProps } from "./ScrollSection.types"

export const ScrollSection = ({
	subheading,
	heading,
	description,
	button,
	listItems,
}: ScrollSectionProps) => {
	const theme = useTheme()
	const { isDesktop, isTablet } = useBreakpoints()
	return (
		<Container>
			<ScrollSectionContent>
				<SideLine color={theme.palette.lsGrey.g200} />
				<ScrollSectionTop>
					<Typography
						variant={isDesktop ? "h6" : "h6Mobile"}
						sx={{ marginBottom: "1.5rem" }}
						component="p"
						textTransform="uppercase"
					>
						{subheading}
					</Typography>
					<Typography
						variant={isDesktop ? "h2" : "h2Mobile"}
						sx={{ marginBottom: "2rem" }}
						component="p"
					>
						{heading}
					</Typography>
					<Typography
						variant={isDesktop ? "p1" : "p1Mobile"}
						sx={{ marginBottom: "2rem" }}
						component="p"
					>
						{description}
					</Typography>
					<Box>
						<DefaultButton label={button.title} variant="contained" href={button.href} />
					</Box>
				</ScrollSectionTop>

				<ScrollSectionBottom>
					<ScrollContentLists>
						{listItems.map((item) => (
							<ScrollContentList key={useId()} imageUrl={item.icon.url}>
								<Typography variant={isTablet ? "h4Mobile" : "h4"}>{item.title}</Typography>
								<Typography variant={isTablet ? "p1Mobile" : "p1"}>{item.description}</Typography>
							</ScrollContentList>
						))}
					</ScrollContentLists>
				</ScrollSectionBottom>
			</ScrollSectionContent>
		</Container>
	)
}
