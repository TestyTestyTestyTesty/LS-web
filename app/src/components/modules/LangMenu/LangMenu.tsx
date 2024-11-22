"use client"
import { localesEnum } from "@lib"
import { Typography } from "@mui/material"
import { ArrowDown } from "@svg/ReactComponents/ArrowDown"
import { Globe } from "@svg/ReactComponents/Globe"
import type { Language } from "@types"
import { useParams, usePathname, useRouter } from "next/navigation"
import {
	LangMenuAccordion,
	LangMenuAccordionDetails,
	LangMenuAccordionSummary,
	LangMenuAccordionSummaryWrapper,
	LangMenuList,
	LangMenuListItem,
} from "./LangMenu.styles"
import type { LangMenuProps } from "./LangMenu.types"

export const LangMenu = ({ languages }: LangMenuProps) => {
	const params = useParams()
	const router = useRouter()
	const pathname = usePathname()

	const currentLocale = params.locale || localesEnum.ENGLISH

	const selectedLanguage =
		languages.find((language) => language.locale === currentLocale) || languages[0]

	const selectLanguage = (language?: Language) => {
		if (language && language.locale !== selectedLanguage.locale) {
			const pathnameWithoutLocale = pathname.replace(`/${currentLocale}`, "")
			router.push(`/${language.locale}${pathnameWithoutLocale}`)
		}
	}
	const languagesExceptSelected = languages.filter(
		(language) => language.locale !== selectedLanguage.locale,
	)
	return (
		<>
			<LangMenuAccordion
				disableGutters
				square
				elevation={0}
				sx={{
					"&:before": {
						display: "none",
					},
				}}
			>
				<LangMenuAccordionSummary expandIcon={<ArrowDown />}>
					<LangMenuAccordionSummaryWrapper>
						<Globe />
						<Typography variant="h6Mobile">{selectedLanguage.itemName}</Typography>
					</LangMenuAccordionSummaryWrapper>
				</LangMenuAccordionSummary>
				<LangMenuAccordionDetails>
					<LangMenuList>
						{languagesExceptSelected.map((language) => (
							<LangMenuListItem key={language.locale} onClick={() => selectLanguage(language)}>
								<Typography variant="h6Mobile">{language.itemName}</Typography>
							</LangMenuListItem>
						))}
					</LangMenuList>
				</LangMenuAccordionDetails>
			</LangMenuAccordion>
		</>
	)
}
