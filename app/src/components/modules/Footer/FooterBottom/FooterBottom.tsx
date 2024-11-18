import { ContainerLarge, Logo } from "@components"
import { FakeLivespaceStatus } from "@components/atoms/FakeLivespaceStatus/FakeLivespaceStatus"
import { useBreakpoints } from "@lib"
import { Typography, useTheme } from "@mui/material"
import Link from "next/link"
import { useId } from "react"
import {
	FooterBottomContent,
	FooterBottomCopyright,
	FooterBottomLink,
	FooterBottomLinks,
	FooterBottomWrapper,
} from "./FooterBottom.styles"
import type { FooterBottomProps } from "./FooterBottom.types"

export const FooterBottom = ({ links, copyright, status }: FooterBottomProps) => {
	const theme = useTheme()
	const { isTabletWide } = useBreakpoints()
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
					{!isTabletWide && (
						<FakeLivespaceStatus color={theme.palette.defaultColors.white} status={status} />
					)}
				</FooterBottomContent>
			</ContainerLarge>
		</FooterBottomWrapper>
	)
}
