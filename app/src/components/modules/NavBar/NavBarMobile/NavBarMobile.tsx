"use client"

import { Container, DefaultButton, Hamburger, LangMenu, Logo, MegaMenuMobile } from "@components"
import {
	MegaMenuMobileLink,
	MegaMenuMobileLinkWrapper,
	MegaMenuMobileTypography,
} from "@components/modules/MegaMenu/MegaMenuMobile/MegaMenuMobile.styles"
import { useBreakpoints } from "@lib"
import { languagesData } from "@mocks"
import { Backdrop } from "@mui/material"
import Link from "next/link"
import { useEffect, useState } from "react"
import type { NavBarProps } from "../NavBar.types"
import {
	NavBarMobileBottom,
	NavBarMobileButtons,
	NavBarMobileList,
	NavBarMobileOuterWrapper,
	NavBarMobileTabletWrapper,
	NavBarMobileTop,
} from "./NavBarMobile.styles"

export const NavBarMobile = ({ links, buttons }: NavBarProps) => {
	const { isTabletWide, isMobileWide } = useBreakpoints()
	const [isMenuOpened, setIsMenuOpened] = useState(false)
	const handleMenuToggle = () => {
		setIsMenuOpened((current) => !current)
	}

	const handleClose = () => {
		setIsMenuOpened(false)
	}

	useEffect(() => {
		isMenuOpened
			? (document.body.style.overflow = "hidden")
			: (document.body.style.overflow = "auto")

		return () => {
			document.body.style.overflow = "auto"
		}
	}, [isMenuOpened])
	const buttonComponents = () => (
		<NavBarMobileButtons>
			{isTabletWide && !isMobileWide && (
				<DefaultButton
					variant="outlined"
					size="small"
					label={buttons[1].title}
					href={buttons[1].href}
				/>
			)}
			<DefaultButton
				variant="contained"
				size="small"
				label={buttons[2].title}
				href={buttons[2].href}
			/>
		</NavBarMobileButtons>
	)
	return (
		<nav>
			<NavBarMobileOuterWrapper>
				<Container>
					<NavBarMobileTop>
						<Logo
							size={!isMobileWide ? "large" : "small"}
							href="/"
							alt="livespace Logo"
							width={!isMobileWide ? 146 : 26}
						/>
						{!isMobileWide ? (
							<NavBarMobileTabletWrapper>
								{buttonComponents()}
								<Hamburger onClick={handleMenuToggle} isOpened={isMenuOpened} />
							</NavBarMobileTabletWrapper>
						) : (
							<>
								{buttonComponents()}
								<Hamburger onClick={handleMenuToggle} isOpened={isMenuOpened} />
							</>
						)}
					</NavBarMobileTop>
				</Container>

				{isMenuOpened && (
					<NavBarMobileBottom>
						<Container>
							{links.map((link, index) =>
								"megaMenu" in link ? (
									<MegaMenuMobile {...link.megaMenu} title={link.title} key={index} />
								) : (
									<Link href={link.href} passHref legacyBehavior key={index}>
										<MegaMenuMobileLink underline="none">
											<MegaMenuMobileLinkWrapper>
												<MegaMenuMobileTypography variant="label3">
													{link.title}
												</MegaMenuMobileTypography>
											</MegaMenuMobileLinkWrapper>
										</MegaMenuMobileLink>
									</Link>
								),
							)}
							<NavBarMobileList>
								<LangMenu languages={languagesData} />
							</NavBarMobileList>
							<DefaultButton
								variant="outlined"
								size="large"
								isFullWidth
								label={buttons[0].title}
								href={buttons[0].href}
							/>
						</Container>
					</NavBarMobileBottom>
				)}
			</NavBarMobileOuterWrapper>
			<Backdrop open={isMenuOpened} onClick={handleClose} sx={{ zIndex: 1300 }} />
		</nav>
	)
}
