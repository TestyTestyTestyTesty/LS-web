import { Container, ContentHeaderWrapper, DefaultButton } from "@components"
import { useBreakpoints } from "@lib"
import { Box, Typography, useTheme } from "@mui/material"
import Image from "next/image"
import { useCallback, useId, useMemo, useState } from "react"
import { InView } from "react-intersection-observer"
import {
	ScrollContentList,
	ScrollContentLists,
	ScrollSectionBottom,
	ScrollSectionContent,
	ScrollSectionIconWrapper,
	ScrollSectionImageWrapper,
	ScrollSectionTop,
} from "./ScrollSection.styles"
import type { ScrollSectionProps } from "./ScrollSection.types"

export const ScrollSection = ({
	subheading,
	heading,
	description,
	button,
	background,
	listItems,
	icons,
}: ScrollSectionProps) => {
	const theme = useTheme()
	const { isDesktop, isTablet } = useBreakpoints()

	const defaultVisibility = useMemo(() => Array(icons.length).fill(false), [icons.length])
	const [iconVisibility, setIconVisibility] = useState(defaultVisibility)

	const handleIconVisibilityPerSection = useCallback((inView: boolean, sectionIndex: number) => {
		setIconVisibility((prevVisibility) => {
			const updatedVisibility = [...prevVisibility]
			switch (sectionIndex) {
				case 0:
					updatedVisibility[0] = inView
					break
				case 1:
					updatedVisibility[1] = inView
					break
				case 2:
					updatedVisibility[2] = inView
					updatedVisibility[3] = inView
					break
				case 3:
					updatedVisibility[4] = inView
					break
				default:
					break
			}

			return updatedVisibility
		})
	}, [])

	return (
		<Container>
			<ScrollSectionContent>
				<ContentHeaderWrapper sideLineColor={theme.palette.lsGrey.g200}>
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
				</ContentHeaderWrapper>
				<ScrollSectionBottom>
					{!isTablet && (
						<ScrollSectionImageWrapper>
							<InView
								onChange={(inView) => handleIconVisibilityPerSection(inView, 0)}
								threshold={0.5}
								triggerOnce
							>
								<Image
									src={background.url}
									width={isDesktop ? "536" : "450"}
									height={isDesktop ? "546" : "450"}
									alt={background.alt}
									quality={100}
									style={{ objectFit: "contain" }}
								/>
							</InView>
							{icons.map((icon, index = 1) => (
								<ScrollSectionIconWrapper
									key={index}
									iconPosition={index}
									isVisible={iconVisibility[index]}
								>
									<Image
										src={icon.url}
										width={icon.width}
										height={icon.height}
										alt={icon.alt}
										quality={100}
									/>
								</ScrollSectionIconWrapper>
							))}
						</ScrollSectionImageWrapper>
					)}
					<ScrollContentLists>
						{listItems.map((item, index) => (
							<ScrollContentList
								threshold={0.5}
								onChange={(inView) => handleIconVisibilityPerSection(inView, index + 1)}
								triggerOnce
								key={useId()}
							>
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
