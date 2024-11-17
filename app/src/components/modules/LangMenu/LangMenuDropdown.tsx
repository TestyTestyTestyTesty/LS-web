"use client"
import { useState } from "react"
import LanguageIcon from "@mui/icons-material/Language"
import { Tooltip, Typography } from "@mui/material"
import { NavButton } from "@components"
import { useParams, usePathname, useRouter } from "next/navigation"
import type { LangMenuProps } from "./LangMenu.types"
import {
	LangMenuContainer,
	LangMenuButton,
	StyledMenu,
	StyledMenuItem,
	StyledCheckIcon,
} from "./LangMenuDropdown.styles"
import type { Language } from "@types"
import { localesEnum } from "@lib"

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
				<Tooltip title={selectedLanguage.languageCode} placement="bottom">
					<LangMenuButton
						aria-controls={open ? "lang-menu" : undefined}
						aria-haspopup="true"
						aria-expanded={open ? "true" : undefined}
						onClick={!disabled ? handleToggle : undefined}
					>
						<LanguageIcon fontSize="small" />
						<NavButton label={selectedLanguage.languageCode} />
					</LangMenuButton>
				</Tooltip>
			</LangMenuContainer>
			<StyledMenu
				anchorEl={anchorEl}
				id="lang-menu"
				open={open}
				onClose={() => handleMenuClose()}
				disableScrollLock={true}
				transformOrigin={{ horizontal: "center", vertical: "top" }}
				anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
			>
				{languages.map((language) => (
					<StyledMenuItem
						key={language.locale}
						selected={language.locale === selectedLanguage.locale}
						onClick={() => handleMenuClose(language)}
						disableRipple
					>
						<StyledCheckIcon selected={language.locale === selectedLanguage.locale} />
						<Typography>{language.itemName}</Typography>
					</StyledMenuItem>
				))}
			</StyledMenu>
		</>
	)
}
