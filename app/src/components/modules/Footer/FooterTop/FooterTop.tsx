import { ContainerLarge, LangMenuDropdown } from "@components"
import { languagesData } from "@mocks"
import { Facebook } from "@svg/ReactComponents/Facebook"
import { Instagram } from "@svg/ReactComponents/Instagram"
import { Linkedin } from "@svg/ReactComponents/Linkedin"
import { Youtube } from "@svg/ReactComponents/Youtube"
import {
	FooterTopContent,
	FooterTopIconLink,
	FooterTopIcons,
	FooterTopWrapper,
} from "./FooterTop.styles"
import type { FooterTopProps } from "./FooterTop.types"

export const FooterTop = ({ socialLinks }: FooterTopProps) => {
	return (
		<FooterTopWrapper>
			<ContainerLarge>
				<FooterTopContent>
					<LangMenuDropdown languages={languagesData} />
					<FooterTopIcons>
						<FooterTopIconLink href={socialLinks[1]}>
							<Linkedin />
						</FooterTopIconLink>
						<FooterTopIconLink href={socialLinks[0]}>
							<Facebook />
						</FooterTopIconLink>
						<FooterTopIconLink href={socialLinks[2]}>
							<Youtube />
						</FooterTopIconLink>
						<FooterTopIconLink href={socialLinks[3]}>
							<Instagram />
						</FooterTopIconLink>
					</FooterTopIcons>
				</FooterTopContent>
			</ContainerLarge>
		</FooterTopWrapper>
	)
}
