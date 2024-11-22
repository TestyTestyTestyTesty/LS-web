"use client"

import { Accordion, Box } from "@mui/material"
import Typography from "@mui/material/Typography"
import { useId } from "react"

import {
	ListType1,
	ListType2,
	MegaMenuBottomSection,
	MegaMenuHighlightSectionSmall,
} from "@components"

import { ArrowDown } from "@svg/ReactComponents/ArrowDown"
import type { MegaMenuProps } from "../MegaMenu.types"
import {
	MegaMenuMobileAccordionDetails,
	MegaMenuMobileAccordionSummary,
	MegaMenuMobileListsType1Wrapper,
	MegaMenuMobileListsWrapper,
	MegaMenuMobileListType1Wrapper,
	MegaMenuMobileWrapper,
} from "./MegaMenuMobile.styles"

export const MegaMenuMobile = ({
	title,
	bottomSection,
	lightAccent,
	darkAccent,
	highlightSection,
	lists,
	listBigIcons,
}: MegaMenuProps) => {
	return (
		<MegaMenuMobileWrapper>
			<Accordion
				disableGutters
				square
				elevation={0}
				sx={{
					"&:before": {
						display: "none",
					},
				}}
			>
				<MegaMenuMobileAccordionSummary expandIcon={<ArrowDown />} id={`panel-${title} `}>
					<Typography variant="label3">{title}</Typography>
				</MegaMenuMobileAccordionSummary>
				<MegaMenuMobileAccordionDetails>
					<Box sx={{ marginBottom: "2rem" }}>
						<MegaMenuHighlightSectionSmall
							highlightSection={highlightSection}
							lightAccent={lightAccent}
							darkAccent={darkAccent}
						/>
					</Box>
					<MegaMenuMobileListsWrapper>
						<MegaMenuMobileListsType1Wrapper>
							{lists.map((list) => (
								<MegaMenuMobileListType1Wrapper key={useId()}>
									<ListType1
										listTitle={list.title}
										listItems={list.items}
										link={list.link}
										lightAccent={lightAccent}
										darkAccent={darkAccent}
									/>
								</MegaMenuMobileListType1Wrapper>
							))}
						</MegaMenuMobileListsType1Wrapper>
					</MegaMenuMobileListsWrapper>

					{listBigIcons && (
						<ListType2 lightAccent={lightAccent} darkAccent={darkAccent} listItems={listBigIcons} />
					)}
					{!!bottomSection && (
						<MegaMenuBottomSection
							title={bottomSection.title}
							subtitle={bottomSection.subtitle}
							link={bottomSection.link}
						/>
					)}
				</MegaMenuMobileAccordionDetails>
			</Accordion>
		</MegaMenuMobileWrapper>
	)
}
