import type { FooterProps } from "./Footer.types"
import { FooterTop, FooterMiddle, FooterBottom } from "@components"

export const Footer = ({ bottom, middle, top }: FooterProps) => {
	return (
		<footer>
			<FooterTop socialLinks={top.socialLinks} />
			<FooterMiddle lists={middle.lists} highlightedContent={middle.highlightedContent} />
			<FooterBottom links={bottom.links} copyright={bottom.copyright} />
		</footer>
	)
}
