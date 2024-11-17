import Image from "next/image"
import LogoLarge from "@mocks/assets/logo-large.svg?url"
import LogoSmall from "@mocks/assets/logo-small.svg?url"
import LogoLargeDark from "@mocks/assets/logo-large-dark.svg?url"
import LogoSmallDark from "@mocks/assets/logo-small-dark.svg?url"
import { Box } from "@mui/material"
import type { LogoProps } from "./Logo.types"

export const Logo = ({ size, href, alt, darkMode, width }: LogoProps) => {
	const logoSrc =
		size === "large" ? (darkMode ? LogoLargeDark : LogoLarge) : darkMode ? LogoSmallDark : LogoSmall
	const logoWidth = width ?? (size === "large" ? 129 : 44)

	return (
		<Box component="a" href={href} display="flex" alignItems="center">
			<Image src={logoSrc} alt={alt} width={logoWidth} style={{ objectFit: "contain" }} />
		</Box>
	)
}
