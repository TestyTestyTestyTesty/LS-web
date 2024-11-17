"use client"

import {
	Container,
	DefaultButton,
	LangMenuDropdown,
	Logo,
	MegaMenuDesktop,
	NavButton,
	NavLink,
} from "@components"
import { languagesData } from "@mocks"
import { Backdrop } from "@mui/material"
import { Fragment, useState } from "react"
import type { NavBarProps } from "../NavBar.types"
import {
	NavBarDesktopLeftSection,
	NavBarDesktopLogoWrapper,
	NavBarDesktopOuterWrapper,
	NavBarDesktopRightSection,
	NavBarDesktopWrapper,
} from "./NavBarDesktop.styles"

export const NavBarDesktop = ({ links, buttons }: NavBarProps) => {
	const [openedMenuIndex, setOpenedMenuIndex] = useState<number | null>(null)
	const handleMenuOpen = (index: number) => {
		setOpenedMenuIndex(index)
	}
	const handleClose = () => {
		setOpenedMenuIndex(null)
	}
	return (
		<>
			<NavBarDesktopOuterWrapper>
				<Container>
					<NavBarDesktopWrapper>
						<NavBarDesktopLeftSection>
							<NavBarDesktopLogoWrapper>
								<Logo size="large" href="/" alt="livespace Logo" width={117} />
							</NavBarDesktopLogoWrapper>
							{links.map((link, index) =>
								"megaMenu" in link ? (
									<Fragment key={index}>
										<NavButton label={link.title} onClick={() => handleMenuOpen(index)} />
										{openedMenuIndex === index && <MegaMenuDesktop {...link.megaMenu} />}
									</Fragment>
								) : (
									<NavLink key={index} label={link.title} href={link.href} />
								),
							)}
						</NavBarDesktopLeftSection>
						<NavBarDesktopRightSection>
							<LangMenuDropdown languages={languagesData} />
							<NavLink label={buttons[0].title} href={buttons[0].href} />
							<DefaultButton
								variant="outlined"
								size="small"
								label={buttons[1].title}
								href={buttons[1].href}
							/>
							<DefaultButton
								variant="contained"
								size="small"
								label={buttons[2].title}
								href={buttons[2].href}
							/>
						</NavBarDesktopRightSection>
					</NavBarDesktopWrapper>
				</Container>
			</NavBarDesktopOuterWrapper>
			<Backdrop open={openedMenuIndex !== null} onClick={handleClose} sx={{ zIndex: 1300 }} />
		</>
	)
}
