import { redirect } from "next/navigation"
import { localesEnum } from "./enums/localesEnum"
import type { Locale } from "@types"

export const useLocaleRedirect = (locale: Locale) => {
	const locales: Locale[] = [localesEnum.ENGLISH, localesEnum.POLISH]
	const defaultLocale = localesEnum.ENGLISH

	if (!locales.includes(locale)) {
		redirect(`/${defaultLocale}`)
	}
}
