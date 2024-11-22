"use client"
import { NavButton } from "@components"
import { localesEnum } from "@lib"
import { Globe } from "@svg/ReactComponents/Globe"
import type { Language } from "@types"
import { useParams, usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import type { LangMenuProps } from "./LangMenu.types"
import {
	LangMenuButton,
	LangMenuContainer,
	StyledCheckIcon,
	StyledMenu,
	StyledMenuItem,
	StyledMenuTypography,
} from "./LangMenuDropdown.styles"

export const LangMenuDropdown = ({ languages, disabled = false }: LangMenuProps) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)

	const params = useParams()
	const router = useRouter()
	const pathname = usePathname()

	const currentLocale = params.locale || localesEnum.ENGLISH

	const selectedLanguage =
		languages.find((language) => language.locale === currentLocale) || languages[0]

	const handleToggle = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl((prevAnchorEl) => (prevAnchorEl ? null : event.currentTarget))
	}

	const handleMenuClose = (language?: Language) => {
		setAnchorEl(null)

		if (language && language.locale !== selectedLanguage.locale) {
			const pathnameWithoutLocale = pathname.replace(`/${currentLocale}`, "")
			router.push(`/${language.locale}${pathnameWithoutLocale}`)
		}
	}

	return (
		<>
			<LangMenuContainer disabled={disabled}>
				<LangMenuButton
					aria-controls={open ? "lang-menu" : undefined}
					aria-haspopup="true"
					aria-expanded={open ? "true" : undefined}
					onClick={!disabled ? handleToggle : undefined}
				>
					<Globe />
					<NavButton label={selectedLanguage.languageCode} showHoverStyles={false} />
				</LangMenuButton>
			</LangMenuContainer>
			<StyledMenu
				anchorEl={anchorEl}
				id="lang-menu"
				open={open}
				onClose={() => handleMenuClose()}
				disableScrollLock={true}
				transformOrigin={{ horizontal: "center", vertical: "top" }}
				anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
				sx={{ zIndex: "1301" }}
			>
				{languages.map((language) => (
					<StyledMenuItem
						key={language.locale}
						selected={language.locale === selectedLanguage.locale}
						onClick={() => handleMenuClose(language)}
						disableRipple
					>
						{language.locale === selectedLanguage.locale && <StyledCheckIcon />}
						<StyledMenuTypography
							variant="navBtn"
							isSelected={language.locale === selectedLanguage.locale}
						>
							{language.itemName}
						</StyledMenuTypography>
					</StyledMenuItem>
				))}
			</StyledMenu>
		</>
	)
}
