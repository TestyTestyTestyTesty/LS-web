import { ContainerLarge, LivespaceStatus, Logo } from "@components"
import { Typography, useMediaQuery, useTheme } from "@mui/material"
import { breakpointsEnum } from "@lib"
import Link from "next/link"
import {
	FooterBottomContent,
	FooterBottomCopyright,
	FooterBottomLink,
	FooterBottomLinks,
	FooterBottomWrapper,
} from "./FooterBottom.styles"
import type { FooterBottomProps } from "./FooterBottom.types"
import { useId } from "react"

export const FooterBottom = ({ links, copyright }: FooterBottomProps) => {
	const theme = useTheme()
	const isTablet = useMediaQuery(theme.breakpoints.down(breakpointsEnum.LG))
	return (
		<FooterBottomWrapper>
			<ContainerLarge>
				<FooterBottomContent>
					<FooterBottomCopyright>
						<Logo size="small" darkMode href="/" alt="livespace Logo" width={16} />
						<Typography variant="navBtn" component="p" color={theme.palette.defaultColors.white}>
							{copyright}
						</Typography>
					</FooterBottomCopyright>
					<FooterBottomLinks>
						{links.map((link) => (
							<Link href={link.href} passHref legacyBehavior key={useId()}>
								<FooterBottomLink underline="none">
									<Typography variant="navBtn" component="p">
										{link.title}
									</Typography>
								</FooterBottomLink>
							</Link>
						))}
					</FooterBottomLinks>
					{!isTablet && <LivespaceStatus darkMode size="sm" />}
				</FooterBottomContent>
			</ContainerLarge>
		</FooterBottomWrapper>
	)
}
