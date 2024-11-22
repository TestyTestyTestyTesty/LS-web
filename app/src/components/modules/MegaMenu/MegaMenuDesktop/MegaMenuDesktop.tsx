"use client"
import {
	ListType1,
	ListType2,
	MegaMenuBottomSection,
	MegaMenuHighlightSectionBig,
} from "@components"
import { forwardRef, useId } from "react"

import {
	MegaMenuDesktopListsOuterWrapper,
	MegaMenuDesktopListsWrapper,
	MegaMenuDesktopRightSectionWrapper,
	MegaMenuDesktopWrapper,
} from "./MegaMenuDesktop.styles"
import type { MegaMenuProps } from "../MegaMenu.types"

export const MegaMenuDesktop = forwardRef<HTMLElement, MegaMenuProps>(
	({ bottomSection, lightAccent, darkAccent, highlightSection, lists, listBigIcons }, ref) => {
		return (
			<MegaMenuDesktopWrapper ref={ref}>
				{!!highlightSection && (
					<MegaMenuHighlightSectionBig
						highlightSection={highlightSection}
						lightAccent={lightAccent}
						darkAccent={darkAccent}
					/>
				)}
				<MegaMenuDesktopRightSectionWrapper>
					<MegaMenuDesktopListsOuterWrapper>
						<MegaMenuDesktopListsWrapper>
							{lists.map((list) => (
								<ListType1
									key={useId()}
									listTitle={list.title}
									listItems={list.items}
									link={list.link}
									lightAccent={lightAccent}
									darkAccent={darkAccent}
								/>
							))}
						</MegaMenuDesktopListsWrapper>
						{listBigIcons && (
							<ListType2
								lightAccent={lightAccent}
								darkAccent={darkAccent}
								listItems={listBigIcons}
							/>
						)}
					</MegaMenuDesktopListsOuterWrapper>
					{!!bottomSection && (
						<MegaMenuBottomSection
							title={bottomSection.title}
							subtitle={bottomSection.subtitle}
							link={bottomSection.link}
						/>
					)}
				</MegaMenuDesktopRightSectionWrapper>
			</MegaMenuDesktopWrapper>
		)
	},
)

MegaMenuDesktop.displayName = "MegaMenuDesktop"
